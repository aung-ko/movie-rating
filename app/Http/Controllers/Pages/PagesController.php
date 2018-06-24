<?php

namespace App\Http\Controllers\Pages;

use App\Models\Genre;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;

class PagesController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
        // $this->middleware('auth');
    }

    public function index()
    {
        $genres = Genre::pluck('name', 'id');
        $movies = Movie::pluck('released_date');
        
        $years = $this->movieRepo->released_date();



        $movies = $this->movieRepo->all();
        return view('pages.index', compact('movies', 'genres', 'years'));

    }

    public function user()
    {
        $genres = Genre::pluck('name', 'id');
        $movies = Movie::pluck('released_date');
        
        $years = $this->movieRepo->released_date();



        $movies = $this->movieRepo->all();
        return view('pages.user', compact('movies', 'genres', 'years'));

    }

}
