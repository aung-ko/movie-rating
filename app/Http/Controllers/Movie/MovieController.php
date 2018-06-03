<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;
use App\Models\Movie;
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
        $movie = $this->movieRepo->get($movie);
        return view('frontend.movie-detail', compact('movie'));
    }
    
}
