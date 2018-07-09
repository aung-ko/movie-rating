<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Status;
use App\Repositories\MovieRepo;
use App\User;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

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
        $movie_count = Movie::count();
        $review_count = Review::count();
        $user_count = User::where('role_id', 2)->count();
        return view('admin.dashboard', compact(['movie_count', 'review_count', 'user_count']));
    }

    public function allMovies()
    {
        return view('admin.movie.movies');
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
            ->addColumn('status', function ($model) {
                $data = $model->status->name;
                return $data;
            })
            ->addColumn("poster", function ($model) {
                $data = "<img width='100' height='auto' src=" . asset('/storage/movies') . '/' . $model->slug . '/' . $model->poster . "></img>";
                return $data;
            })
            ->rawColumns(['name', 'status', 'poster'])
            ->make(true);
    }
}
