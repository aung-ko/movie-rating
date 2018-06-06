<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Models\Movie;
use App\Models\Status;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;
use Alert;

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
        return view('admin.movie.movies', compact('movies'));
    }

    public function editMovie(Movie $movie)
    {
        $genres = Genre::pluck('name', 'id');
        $statuses = Status::all();
        $movie = $this->movieRepo->get($movie);
        $movie_genre_ids = [];
        foreach ($movie->genres as $genre) {
            $movie_genre_ids[$genre->id] = $genre->name;
        }
        return view('admin.movie.edit-movie', compact(['movie', 'genres', 'movie_genre_ids', 'statuses']));
    }

    public function updateMovie(Request $request, Movie $movie)
    {
        $this->movieRepo->update($request, $movie);
        return redirect()->route('admin.movies');
    }

    public function createMovie()
    {
        $genres = Genre::pluck('name', 'id');
        $statuses = Status::all();
        return view('admin.movie.create-movie', compact(['genres', 'statuses']));
    }

    public function storeMovie(Request $request)
    {
        $this->movieRepo->save($request);        
        return redirect()->route('admin.movies');
    }

    public function deleteMovie(Movie $movie)
    {
        $this->movieRepo->delete($movie);
        // Alert::success('Movie is Deleted');
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
            ->editColumn('name', '<a href=movie/{{ $slug }}/edit> {{ $name }} </a>')
            ->addColumn('status', function($model){
                $data = $model->status->name;
                return $data;
            })
            ->rawColumns(['name','status'])
            ->make(true);
    }
}
