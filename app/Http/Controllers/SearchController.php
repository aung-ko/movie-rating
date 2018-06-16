<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Genre;
use App\Filters\MovieFilters;
use App\Filters\GenreFilters;
use App\Filters\RatingFilters;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;
use App\Repositories\MovieRepo;

class SearchController extends Controller
{
     protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
        // $this->middleware('auth');
    }
	public function search(Request $request, MovieFilters $movieFilters, GenreFilters $genreFilters)
    {
        
        $genre = Genre::filter($genreFilters)->get();
        $movie = Movie::filter($movieFilters);
        $genres = Genre::pluck('name', 'id');

        $results = $movie->whereHas('genres' , function ($query) use ($genreFilters) {
            $genreFilters->apply($query);
        })->get();

        // dd($results->count());


        $numOfResults = 0;
        foreach ($results as $result) {
            $numOfResults++;
        }
       


        // if (count($results) == 0 || $numOfResults == 0) {
        //     Alert::warning("No Results Found", "Try again");
        //     return back();
        // }else{
        //     Alert::success("$numOfResults Results Found", "Results Found");
        // }

        $years = $this->movieRepo->released_date();
        
        

       return view('frontend.movie-listing', compact('results', 'genres', 'years'));
    
        
       
    }

}
