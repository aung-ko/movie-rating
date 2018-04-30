<?php

namespace App\Http\Controllers;

use App\Movie;
use App\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    	$movies = Movie::paginate(10);

    	return view('movie.index', compact('movies'));
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
    		'movie_image' => 'image',
    		'released_date' => 'required',

    	]);
    	// $file = $request->file("movie_image");
    	// dd($file);
    	// $old_filename = $file->getClientOriginalName();
    	$path = Storage::putFile("public/images", $request->file('movie_image'));
    	$path = '/' . str_replace('public', 'storage', $path);
    	

    	$name = $request->movie_name;
    	$slug = str_slug($name, "-");

    	Movie::create([
    		'movie_name' => request('movie_name'),
    		'director_name' => request('director_name'),
    		'description' => request('description'),
    		'movie_image' => $path,
    		'released_date' => request('released_date'),
    		'slug' => $slug


    	]);

    	$movie = Movie::where('movie_name', request('movie_name'))->first();
    	$length = count($request->genre_id);
    	for ($i=0; $i < $length; $i++) { 
    		$genre = Genre::where('id', $request->genre_id[$i])->first();
    		$movie->genres()->attach($genre);
    	}


    	return Redirect::route('movie.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {


    	return view('movie.show', compact('movie'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
    	$genre = Genre::pluck('genre_name', 'id');
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
    		'movie_image' => 'image',
    		'released_date' => 'required',

    	]);

    	$file = $request->file("movie_image");
    	$old_filename = $file->getClientOriginalName();
    	Storage::putFileAS("public/images", $file, $old_filename);

    	$name = $request->movie_name;
    	$slug = str_slug($name, "-");



    	$movie->update([
    		'movie_name' => $request->movie_name,
    		'director_name' => $request->director_name,
    		'description' => $request->description,
    		'movie_image' => $old_filename,
    		'released_date' => $request->released_date,
    		'slug' => $slug

    	]);


    	$movie = Movie::where('id', $movie->id)->first();
    	$movie->genres()->detach();

    	$length = count($request->genre_id);
    	for ($i=0; $i < $length; $i++) { 
    		$genre = Genre::where('id', $request->genre_id[$i])->first();
    		$movie->genres()->attach($genre);
    	}

    	return Redirect::route('movie.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {


    	$movie = Movie::deleteslug($movie->slug)->first();
    	$movie->genres()->detach();

    	$movies = Movie::deleteslug($movie->slug);
    	$movies->delete();

    	return Redirect::route('movie.index');
    }
}
