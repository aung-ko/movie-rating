<?php

namespace App\Http\Controllers;

use App\Image;
use App\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $image = Image::paginate(10);
        return view('image.index', compact('image'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)

    {
       //Take requested key and value from create button located in /movie/show.blade.php
        $id = $request->all();
        foreach($id as $key=>$value){
            $name = $key;
            $id = $value;
        }
        
       //and then pass key and value to create form
        return view('image.create', compact('name', 'id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Movie $movie)
    {
        //Take requested key and value from create form
        $id = $request->except(['_token', 'image_path']);
        foreach($id as $key=>$value){
            $name = $key;
            $id = $value;
        }

        $this->validate(request(), [
            'image_path' => 'image',
        ]);

        // Put in Storage Requested File and Save Image Path
        $path = Storage::putFile("public/images", $request->file('image_path'));
        $path = '/' . str_replace('public', 'storage', $path);

        //Create image path depend on request key and value
        Image::create([
            'image_path' => $path,
            "$name" => $id

       ]);

        //Pluck Slug value from Movie depend on id
        $slug = Movie::where('id' , $id)->pluck('slug');
        
        //Redirect back to Movie show depend on slug
        return redirect()->action(
            'MovieController@show', ['slug' =>$slug[0]]
        );
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
