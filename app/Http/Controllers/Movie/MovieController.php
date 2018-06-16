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

    public function index()
    {
        $movies = $this->movieRepo->all();
        return view('movies.index', compact('movies'));
    }

    public function show(Movie $movie)
    {
        $reviews = Review::where('movie_id', '=' , $movie->id)->get();

        
        
      
        
        // $replies = Reply::where('review_id' , '=', $re);

        $movie = $this->movieRepo->get($movie);
        return view('frontend.movie-detail', compact('movie', 'reviews'));
    }

    

    
}
