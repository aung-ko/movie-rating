<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Reply;

class ReviewController extends Controller
{
	public function create(Movie $movie)
	{
		return view('movies.review-create', compact('movie'));
	}
    public function store(Request $request, Movie $movie)
    {
        $this->validate($request, [
            'body' => 'string'
        ]);




        Review::create([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'movie_id' => $movie->id

        ]);

        return redirect()->route('movie.show', $movie->slug);
    }
    public function show(Movie $movie, Review $review)
    {
        return view('movies.review-show', compact('review', 'movie'));
    }

    public function edit(Movie $movie, Review $review)
    {
        return view('movies.review-edit', compact('review', 'movie'));
    }

    public function update(Request $request,Movie $movie, Review $review)
    {
        $this->validate($request, [
            'title' => 'string',
            'body' => 'string'
        ]);




        $review->update([
            'title' => $request->title,
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'movie_id' => $movie->id

        ]);

        return redirect()->route('movie.show', $movie->slug);
    }

    

    public function destroy($id)
    {
        // dd($id);
        $review = Review::where('id', '=' , $id)->delete();
        return redirect()->back();
    }
}
