<?php

namespace App\Http\Controllers\Movie;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;

class MovieController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth','admin']);
    }

    public function index(MovieRepo $movieRepo)
    {
        $movies = $movieRepo->all();
        return view('movies.index');
    }
}
