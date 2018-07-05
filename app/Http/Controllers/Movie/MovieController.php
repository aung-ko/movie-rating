<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Reply;

class MovieController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        // $this->middleware(['auth', 'admin']);
        $this->movieRepo = $movieRepo;

    }

    public function show(Movie $movie)
    {
        $reviews = Review::where('movie_id', '=' , $movie->id)->get();

        $movie = $this->movieRepo->get($movie);
        $relatedMovies = $this->movieRepo->getRelatedMovies($movie->id, $movie->genres);
        return view('movies.show', compact('movie', 'reviews','genres', 'relatedMovies'));
    }

    

    
}
