<?php

namespace App\Http\Controllers;

use App\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	$genres = Genre::paginate(5);
    	return view('genre.index', compact('genres'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    	return view('genre.create');
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
    		'genre_name' => 'required'

    	]);

    	$name = $request->genre_name;
    	$slug = str_slug($name, "-");

    	Genre::create([
    		'genre_name' => request('genre_name'),
    		'slug' => $slug


    	]);

    	return Redirect::route('genre.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        
        // dd($slug);
        $genres = Genre::showslug($slug);
        $genre = $genres->toArray();
        
        // dd($movie[0]['id']);

        return view('genre.show', compact('genre'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        
        $genres = Genre::showslug($slug);
        $genre = $genres->toArray();
        // dd($movie[0]['id']);
        return view('genre.edit', compact('genre'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Genre $genre)
    {
    	$this->validate(request(), [
    		'genre_name' => 'required'

    	]);

    	$name = $request->genre_name;
    	$slug = str_slug($name, "-");



    	$genre->update([
    		'genre_name' => $request->genre_name,
    		'slug' => $slug

    	]);

    	return redirect()->action(
    		'GenreController@show', ['slug' => $genre->slug]
    	);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function destroy(Genre $genre)
    {
    	Genre::deleteid($genre->id);
    	return Redirect::route('genre.index');
    }
}
