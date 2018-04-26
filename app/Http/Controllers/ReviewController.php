<?php

namespace App\Http\Controllers;

use Auth;
use App\Review;
use App\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $reviews = Review::paginate(10);
        return view('review.index', compact('reviews'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('review.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->review_name;
        $slug = str_slug($name, "-");
        $user = Auth::User();     
        $userId = $user->id;
        $this->validate(request(), [
            'review_name' => 'required',
            'movie_id' => 'required',
            'description' => 'required',
        ]);

        //dd($userId);
        Review::create([
            'review_name' => request('review_name'),
            'user_id' => $userId,
            'movie_id' => request('movie_id'),
            'description' => request('description'),
            'slug' => $slug,
        ]);

        return Redirect::route('review.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        $reviews = Review::where('slug', '=' , $slug)->get();
        $review = $reviews->toArray();

        return view('review.show', compact('review'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        $reviews = Review::where('slug', '=' , $slug)->get();
        $review = $reviews->toArray();
        // dd($movie[0]['id']);
        return view('review.edit', compact('review'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Review $review)
    {
       $this->validate(request(), [
        'review_name' => 'required',
        'user_id' => 'required',
        'movie_id' => 'required',
        'description' => 'required',

    ]);

       $name = $request->review_name;
       $slug = str_slug($name, "-");
    
       $review->update([
        'review_name' => $request->review_name,
        'user_id' => $request->user_id,
        'movie_id' => $request->movie_id,
        'released_date' => $request->released_date,
        'slug' => $slug



    ]);
       return redirect()->action(
        'ReviewController@show', ['slug' => $review->slug]
    );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review)
    {
        Review::deleteid($review->id);
        return Redirect::route('review.index');
    }
}
