<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Genre;
use App\Filters\MovieFilters;
use App\Filters\GenreFilters;
use App\Filters\RatingFilters;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class SearchController extends Controller
{
	public function search(Request $request, MovieFilters $movieFilters, GenreFilters $genreFilters)
    {
        
        $genre = Genre::filter($genreFilters)->get();
        $movie = Movie::filter($movieFilters);


        $results = $movie->whereHas('genres' , function ($query) use ($genreFilters) {
            $genreFilters->apply($query);
        })->get()->toArray();

        // dd($results->count());


        $numOfResults = 0;
        foreach ($results as $result) {
            $numOfResults++;
        }
        // Alert::info('Test', 'test');




        // dd($numOfResults);


        if (count($results) == 0 || $numOfResults == 0) {
            Alert::warning("No Results Found", "Try again");
            return back();
        }else{
            Alert::success("$numOfResults Results Found", "Results Found");
        }
        

       return $results;
    
        
       
    }

}
