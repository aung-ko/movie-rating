<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Review;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;


class ReviewController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('show');
    }

    public function create(Movie $movie)
    {
        if (auth()->user()->reviewExistForMovie($movie)) {
            $review = Review::where([
                'user_id' => auth()->user()->id,
                'movie_id' => $movie->id,
            ])->first();
            return redirect()->route('review.edit', [$movie, $review]);
        }
        return view('movies.review-create', compact('movie'));
    }

    public function allReviews(Movie $movie)
    {
        $reviews = Review::latest()
        ->where('movie_id', '=', $movie->id)
        ->paginate(5);
        return view('movies.reviews', compact(['reviews', 'movie']));
    }

    public function store(Request $request, Movie $movie)
    {
        $request->validate([
            'rating' => 'required',
            'title' => 'string',
            'body' => 'string',
        ]);

        if (\Auth::check()) {
            Review::create([
                'title' => $request->title,
                'body' => $request->body,
                'user_id' => \Auth::user()->id,
                'movie_id' => $movie->id,
                'rating' => $request->rating,
            ]);
        } else {
            abort(403, 'Unauthorized action. You have to login');
        }

        $movie->recalculateRating();

        return redirect()->route('movie.show', $movie->slug);
    }

    public function show(Movie $movie, Review $review)
    {
        return view('movies.review-show', compact('review', 'movie'));
    }

    public function update(Request $request, Movie $movie, Review $review)
    {

        $this->validate($request, [
            'title' => 'required|string',
            'rating' => 'required',
            'body' => 'required|string',
        ]);

        if (\Auth::check()) {
            $review->update([
                'title' => $request->title,
                'body' => $request->body,
                'rating' => $request->rating,
                'user_id' => \Auth::user()->id,
                'movie_id' => $movie->id,

            ]);
        } else {
            abort(403, 'Unauthorized action. You have to login');
        }

        $movie->recalculateRating();

        return redirect()->route('review.show', [$movie, $review]);
    }

    public function destroy(Movie $movie, Review $review)
    {
        $review = Review::where('id', '=', $review->id)->delete();
        return redirect()->route('movie.show', $movie->slug);
    }

    public function edit(Movie $movie, Review $review)
    {
        return view('movies.review-edit', compact(['movie', 'review']));
    }

    public function reviewList()
    {
        return view('admin.review.index');
    }


    public function reviewDestroy(Review $review)
    {
        $review = Review::where('id', '=', $review->id)->delete();
        return redirect()->route('admin.review');
    }

    public function reviewData()
    {
        $reviews = Review::all();
        return Datatables::of($reviews)
        ->addColumn("movie", function($model){
            $data = $model->movie->name;
            return $data;
        })
        ->addColumn("delete", function($model){
            $data = '<form action='. route('admin.review.destroy', $model->id) .'  method="POST">'
            . csrf_field() .
            method_field("delete") .
            '<button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button>
            </form>';
            return $data;
        })
        ->rawColumns(['movie', 'delete'])
        ->make(true);
    }

    
}

// ->addColumn("edit", function($model){
//             $data = "<button type='button' class='btn btn-primary' 
//             data-toggle='modal' data-target='#reviewModal" . $model->id . "'>
//             <span class='glyphicon glyphicon-pencil'></span>
//             </button>
//             <div class='modal fade' id='reviewModal" . $model->id . "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
//             <div class='modal-dialog' role='document'>
//             <div class='modal-content'>
//             <div class='modal-header'>
//             <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
//             <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
//             <span aria-hidden='true'>&times;</span>
//             </button>
//             </div>
//             <div class='modal-body'>
            
//             </div>
//             <div class='modal-footer'>
//             <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
//             <button type='button' class='btn btn-primary'>Save changes</button>
//             </div>
//             </div>
//             </div>
//             </div>";
//             return $data;
//         })

