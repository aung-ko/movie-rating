<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Review;
use App\Models\Reply;

class MovieController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        // $this->middleware(['auth', 'admin']);
        $this->movieRepo = $movieRepo;

    }

    public function index()
    {
        $movies = $this->movieRepo->all();
        return view('movies.index', compact('movies'));
    }

    public function show(Movie $movie)
    {
        $reviews = Review::where('movie_id', '=' , $movie->id)->get();

        
        
      
        
        // $replies = Reply::where('review_id' , '=', $re);

        $movie = $this->movieRepo->get($movie);
        return view('frontend.movie-detail', compact('movie', 'reviews'));
    }

    public function storeReply(Request $request, Movie $movie, Review $review)
    {
        $this->validate($request, [
            'body' => 'string'
        ]);

        


        Reply::create([
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'review_id' => $review->id

        ]);

        return redirect()->route('movie.show', $movie->slug);
    }


    public function storeReview(Request $request, Movie $movie)
    {
        $this->validate($request, [
            'body' => 'string'
        ]);




        Review::create([
            'title' => 'Not Yet',
            'body' => $request->body,
            'user_id' => \Auth::user()->id,
            'movie_id' => $movie->id

        ]);

        return redirect()->route('movie.show', $movie->slug);
    }

    public function destroyReply($id)
    {

        $reply = Reply::where('id', '=', $id)->delete();

        return redirect()->back();
    }

    public function destroyReview($id)
    {
        // dd($id);
        $review = Review::where('id', '=' , $id)->delete();
        return redirect()->back();
    }
    
}
