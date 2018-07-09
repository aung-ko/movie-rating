<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Models\Movie;
use App\Repositories\MovieRepo;

class PagesController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
    }

    public function index()
    {
        $genres = Genre::pluck('name', 'id');
        $movies = Movie::pluck('released_date');

        $years = $this->movieRepo->released_date();

        $showingMovies = $this->movieRepo->getMovieByStatus(1);
        $comingSoonMovies = $this->movieRepo->getMovieByStatus(2);

        return view('pages.index', compact('showingMovies', 'comingSoonMovies', 'genres', 'years'));

    }

    public function user()
    {
        $movies = $this->movieRepo->all();
        return view('frontend.user', compact('movies', 'genres', 'years'));
    }

    public function reviews()
    {
        $movies = $this->movieRepo->all();
        return view('reviews.review-show', compact('movies', 'genres', 'years'));
    }
}
