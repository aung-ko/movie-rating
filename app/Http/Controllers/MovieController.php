<?php

namespace App\Http\Controllers;

use App\Movie;
use App\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $genre = Genre::pluck('genre_name', 'id');
        $movies = Movie::paginate(10);

        return view('movie.index', compact('movies','genre'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $genre = Genre::pluck('genre_name', 'id');
        return view('movie.create', compact('genre'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate(request(), [
            'movie_name' => 'required',
            'director_name' => 'required',
            'description' => 'required',
            'genre_id' => 'required',
            'released_date' => 'required',

        ]);

        $name = $request->movie_name;
        $slug = str_slug($name, "-");

        Movie::create([
            'movie_name' => request('movie_name'),
            'director_name' => request('director_name'),
            'description' => request('description'),
            'genre_id' => request('genre_id'),
            'released_date' => request('released_date'),
            'slug' => $slug


        ]);

        return Redirect::route('movie.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $genre = Genre::pluck('genre_name', 'id');
        // dd($slug);
        $movies = Movie::where('slug', '=' , $slug)->get();
        $movie = $movies->toArray();
        
        // dd($movie[0]['id']);

        return view('movie.show', compact('movie', 'genre'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $genre = Genre::pluck('genre_name', 'id');
        $movies = Movie::where('slug', '=' , $slug)->get();
        $movie = $movies->toArray();
        // dd($movie[0]['id']);
        return view('movie.edit', compact('movie','genre'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
       $this->validate(request(), [
        'movie_name' => 'required',
        'director_name' => 'required',
        'description' => 'required',
        'genre_id' => 'required',
        'released_date' => 'required',

    ]);

       $name = $request->movie_name;
       $slug = str_slug($name, "-");
       


       $movie->update([
        'movie_name' => $request->movie_name,
        'director_name' => $request->director_name,
        'description' => $request->description,
        'genre_id' => $request->genre_id,
        'released_date' => $request->released_date,
        'slug' => $slug

    ]);

       return redirect()->action(
        'MovieController@show', ['slug' => $movie->slug]
    );
   }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        Movie::deleteid($movie->id);
        return Redirect::route('movie.index');
    }
}
