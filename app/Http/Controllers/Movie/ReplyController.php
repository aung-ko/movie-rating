<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Reply;

class ReplyController extends Controller
{
    public function store(Request $request, Movie $movie, Review $review)
    {
        $this->validate($request, [
            'body' => 'string'
        ]);

        


        Reply::create([
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'review_id' => $review->id

        ]);

        return redirect()->route('review.show', [$movie, $review->id]);
    }


    public function edit(Movie $movie, Review $review, Reply $reply)
    {
        return view('movies.reply-edit', compact('review', 'movie', 'reply'));
    }

    public function update(Request $request,Movie $movie, Review $review, Reply $reply)
    {
        $this->validate($request, [
            'body' => 'string'
        ]);




        $reply->update([
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'review_id' => $review->id

        ]);

        return redirect()->route('review.show', [$movie, $review->id]);
    }


    public function destroy($id)
    {

        $reply = Reply::where('id', '=', $id)->delete();

        return redirect()->back();
    }
}
