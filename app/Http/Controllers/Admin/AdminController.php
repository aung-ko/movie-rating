<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;
use App\Models\Movie;

class AdminController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->middleware('admin');
        $this->movieRepo = $movieRepo;
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }

    public function allMovies()
    {
        return view('admin.movies', compact('movies'));
    }

    public function editMovie(Movie $movie)
    {
        $movie = $this->movieRepo->get($movie);
        return view('admin.edit-movie', compact('movie'));
    }

    public function updateMovie(Request $request, Movie $movie)
    {
        $this->movieRepo->update($request, $movie);
        return redirect()->route('admin.movies');
    }

    public function createMovie()
    {
        return view('admin.create-movie');
    }

    public function storeMovie(Request $request)
    {
        $this->movieRepo->save($request);
        return redirect()->route('admin.movies');
    }

    public function deleteMovie(Movie $movie)
    {
        $this->movieRepo->delete($movie);
        return redirect()->route('admin.movies');
    }

    /**
     * Process datatables ajax request.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function anyData()
    {
        $movies = $this->movieRepo->all();
        return Datatables::of($movies)
            ->editColumn('name', '<a href={{ $slug }}/edit> {{ $name }} </a>')
            ->rawColumns(['name'])
            ->make(true);
    }
}
