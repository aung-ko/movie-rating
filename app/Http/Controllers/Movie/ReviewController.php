<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['store', 'update', 'destroy']);
    }

    public function create(Movie $movie)
    {
        return view('reviews.write-review', compact('movie'));
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
        return view('reviews.review-show', compact('review', 'movie'));
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

        return redirect()->route('movie.show', $movie->slug);
    }

    public function destroy(Movie $movie, Review $review)
    {
        // dd($review);
        $review = Review::where('id', '=', $review->id)->delete();
        return redirect()->route('movie.show', $movie->slug);
    }
}
