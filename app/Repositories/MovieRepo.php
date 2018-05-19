<?php

namespace App\Repositories;

use App\Models\Movie;

class MovieRepo
{
    public function all()
    {
        return Movie::latest()->get();
    }

    public function save($request)
    {
        $validatedMovie = $this->validateMovie($request);
        $validatedMovie['slug'] = $this->makeSlug($request->name);
        Movie::create($validatedMovie);
    }

    public function get($movie)
    {
        $movie = Movie::where('slug', $movie->slug)->first();
        return $movie;
    }

    public function update($request, $movie)
    {
        $validatedMovie = $this->validateMovie($request);
        if ($request->name !== $movie->name) {
            $validatedMovie['slug'] = $this->makeSlug($request->name);
            $movie->update($validatedMovie);
        } else {
            $movie->update($validatedMovie);
        }
    }

    public function delete($movie)
    {
        $movie->delete();
    }

    public function makeSlug($name)
    {
        return str_slug($name, "-") . "-" . uniqid();
    }

    public function validateMovie($request)
    {
        return $request->validate([
            'name' => 'required|max:200',
            'director_name' => 'required|max:200',
            'description' => 'required',
            'poster' => 'required',
            'released_date' => 'required|date',
            'status' => 'required',
        ]);
    }

}
