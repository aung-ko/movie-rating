<?php

namespace App\Http\Controllers;

use App\Movie;
use App\Genre;
use App\Image;
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

        //Validation
    	$this->validate(request(), [
    		'movie_name' => 'required',
    		'director_name' => 'required',
    		'description' => 'required',
    		'genre_id' => 'required',
    		'released_date' => 'required',

    	]);
 
        // Requested File
    	$file = $request->file("movie_image");

        // Get File's Original Name
    	$old_filename = $file->getClientOriginalName();

        // Put in Storage Requested File with File's Original Name and Save Image Path
    	$path = Storage::putFileAS("public/images", $file, $old_filename);
    	$path = '/' . str_replace('public', 'storage', $path);
    	
        //Create Slug depend on movie_name
    	$name = $request->movie_name;
    	$slug = str_slug($name, "-");

        //Create in Movie Table

    	Movie::create([
    		'movie_name' => request('movie_name'),
    		'director_name' => request('director_name'),
    		'description' => request('description'),
    		'movie_image' => $path,
    		'released_date' => request('released_date'),
    		'slug' => $slug


    	]);

        //Create Movie and Genre Joint ID in Joint Table
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
        //Take Image depend on movie_id
    	$images = Image::where('movie_id', $movie->id)->get();
    	
    	return view('movie.show', compact('movie','images'));
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
        //Validation
    	$this->validate(request(), [
    		'movie_name' => 'required',
    		'director_name' => 'required',
    		'description' => 'required',
    		'genre_id' => 'required',
    		'movie_image' => 'image|required',
    		'released_date' => 'required',

    	]);

         // Requested File
    	$file = $request->file("movie_image");

        // Get File's Original Name
    	$old_filename = $file->getClientOriginalName();

         // Put in Storage Requested File with File's Original Name and Save Image Path
    	$path = Storage::putFileAS("public/images", $file, $old_filename);
    	$path = '/' . str_replace('public', 'storage', $path);

        //Create Slug depend on movie_name
    	$name = $request->movie_name;
    	$slug = str_slug($name, "-");


        //Update in Movie Table
    	$movie->update([
    		'movie_name' => $request->movie_name,
    		'director_name' => $request->director_name,
    		'description' => $request->description,
    		'movie_image' => $path,
    		'released_date' => $request->released_date,
    		'slug' => $slug

    	]);

        // Delete Existing Movie and Genre Joint ID in Joint Table
    	$movie = Movie::where('id', $movie->id)->first();
    	$movie->genres()->detach();

        //Create Movie and Genre new Joint ID in Joint Table
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

        //Delete Movie depend on Slug
    	$movie = Movie::deleteslug($movie->slug)->first();
    	$movie->genres()->detach();

    	$movies = Movie::deleteslug($movie->slug);
    	$movies->delete();

    	return Redirect::route('movie.index');
    }
}
