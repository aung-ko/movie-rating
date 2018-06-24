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
        // dd($review);
        $this->validate($request, [
            'body' => 'required|string',
        ]);

        

        if(\Auth::check()){
            Reply::create([
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'review_id' => $review->id

        ]);
        }else{
            abort(403, 'Unauthorized action. You have to Login first');
        }
        

        return redirect()->route('review.show', [$movie, $review->id]);
    }


    

    public function update(Request $request,Movie $movie, Review $review, Reply $reply)
    {
        $this->validate($request, [
            'body' => 'required'
        ]);



        if(\Auth::check()){
        $reply->update([
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'review_id' => $review->id

        ]);
        }else{
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
