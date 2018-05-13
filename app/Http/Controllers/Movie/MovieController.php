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
        $this->middleware(['auth', 'admin']);
        $this->movieRepo = $movieRepo;

    }

    public function index()
    {
        $movies = $this->movieRepo->all();
        return view('movies.index', compact('movies'));
    }

    public function create()
    {
        return view('movies.create');
    }

    public function store(Request $request)
    {
        $this->movieRepo->save($request);
        return redirect()->route('movie.index');
    }

    public function show(Movie $movie)
    {
        return $this->movieRepo->get($movie);
        // return view('movies.show');
    }

    public function edit(Movie $movie)
    {
        $movie = $this->movieRepo->get($movie);
        return view('movies.edit', compact('movie'));
    }

    public function update(Request $request, Movie $movie)
    {
        $this->movieRepo->update($request, $movie);
        return redirect()->route('movie.index');
    }
}
