<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\Reply;
use App\Models\Review;
use Illuminate\Http\Request;

class ReplyController extends Controller
{

    public function store(Request $request, Movie $movie, Review $review)
    {
        $this->validate($request, [
            'body' => 'required|string',
        ]);

        if (\Auth::check()) {
            Reply::create([
                'body' => $request->body,
                'user_id' => \Auth::user()->id,
                'review_id' => $review->id,

            ]);
        } else {
            abort(403, 'Unauthorized action. You have to Login first');
        }

        return redirect()->route('review.show', [$movie, $review->id]);
    }

    public function update(Request $request, Movie $movie, Review $review, Reply $reply)
    {
        $this->validate($request, [
            'body' => 'required',
        ]);

        if (\Auth::check()) {
            $reply->update([
                'body' => $request->body,
                'user_id' => \Auth::user()->id,
                'review_id' => $review->id,

            ]);
        } else {
            abort(403, 'Unauthorized action. You have to Login first');
        }

        return redirect()->route('review.show', [$movie, $review->id]);
    }

    public function destroy($id)
    {
        $reply = Reply::where('id', '=', $id)->delete();
        return redirect()->back();
    }
}
