<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Review;
use App\Repositories\MovieRepo;

class MovieController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
    }

    public function show(Movie $movie)
    {
        $reviews = Review::latest()
            ->where('movie_id', '=', $movie->id)
            ->take(3)
            ->get();

        $movie = $this->movieRepo->get($movie);
        $relatedMovies = $this->movieRepo->getRelatedMovies($movie->id, $movie->genres);
        return view('movies.show', compact('movie', 'reviews', 'genres', 'relatedMovies'));
    }

}
