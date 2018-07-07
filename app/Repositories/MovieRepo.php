<?php

namespace App\Repositories;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovieRepo
{
    public function all()
    {
        return Movie::latest()->get();
    }

    public function save($request)
    {
        // validation
        $validatedMovie = $this->validateMovie($request);

        // making slug according to name
        $slug = $this->makeSlug($request->name);
        $validatedMovie['slug'] = $slug;

        // file fields
        $files = ['poster', 'background', 'thumb'];

        // preparing file path
        $path = 'public/movies/' . $slug . '/';

        // upload all images
        $images = $this->uploadImages($request, $files, $path);

        $validatedMovie = array_merge($validatedMovie, $images);
        $movie = Movie::create(array_except($validatedMovie, 'genres'));
        $movie->genres()->sync($request->genres);
    }

    public function get($movie)
    {
        $movie = Movie::where('slug', $movie->slug)->first();
        return $movie;
    }

    public function update($request, $movie)
    {;
        $validatedMovie = $this->validateMovieUpdate($request);

        $path = 'public/movies/' . $movie->slug . '/';

        if ($request->hasfile('poster')) {
            $validatedMovie['poster'] = $this->uploadOneImage($request, 'poster', $path);
        }

        if ($request->hasfile('background')) {
            $validatedMovie['background'] = $this->uploadOneImage($request, 'background', $path);
        }

        if ($request->hasfile('thumb')) {
            $validatedMovie['thumb'] = $this->uploadOneImage($request, 'thumb', $path);
        }

        $movie->update(array_except($validatedMovie, 'genres'));
        $movie->genres()->sync($request->genres);

    }

    public function getMovieByStatus($status)
    {
        if($status == 2){
            return Movie::where('status_id', $status)->take(8)->get();
        }
        return Movie::where('status_id', $status)->get();
    }

    public function getRelatedMovies($movieId, $genres)
    {
        $related = [];
        foreach ($genres as $genre) {
            $movies = DB::table('movies')
                ->join('movie_genres', 'movies.id', '=', 'movie_genres.movie_id')
                ->where('movie_genres.genre_id', '=', $genre->id)
                ->where('movies.id', '!=', $movieId)
                ->get();
            foreach ($movies as $movie) {
                array_push($related, $movie);
            }
        }
        return collect(array_slice($related, 0, 5));
    }

    public function released_date()
    {
        $startdate = 1960;
        $enddate = date('Y');
        $years = range($enddate, $startdate);
        return $years;
    }

    public function delete($movie)
    {
        $movie->delete();
    }

    public function makeSlug($name)
    {
        return str_slug($name, "-") . "-" . uniqid();
    }

    protected function uploadOneImage(Request $request, $file, $path)
    {
        $image = $request->file($file);
        $name = hash('md5', rand(100, 999), false) . '.' . $image->getClientOriginalExtension();
        $image->storeAs($path, $name);

        return $name;
    }

    protected function uploadImages(Request $request, $files, $path)
    {
        $result = [];
        foreach ($files as $file) {
            if ($request->hasfile($file)) {
                $image = $request->file($file);
                $name = hash('md5', rand(100, 999), false) . '.' . $image->getClientOriginalExtension();
                $image->storeAs($path, $name);
                $result[$file] = $name;
            }
        }
        return $result;
    }

    public function validateMovie($request)
    {
        return $request->validate([
            'name' => 'required|max:200',
            'director_name' => 'required|max:200',
            'description' => 'required',
            'poster' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'background' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'thumb' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'trailer_id' => 'required|max:200',
            'released_date' => 'required|date',
            'status_id' => 'required',
            'genres' => 'required|array|min:1',
        ]);
    }

    public function validateMovieUpdate($request)
    {
        return $request->validate([
            'name' => 'required|max:200',
            'director_name' => 'required|max:200',
            'description' => 'required',
            'poster' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'background' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'thumb' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'trailer_id' => 'required|max:200',
            'released_date' => 'required|date',
            'status_id' => 'required',
            'genres' => 'required|array|min:1',
        ]);
    }

}
