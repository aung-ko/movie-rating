<?php

namespace App\Http\Controllers;

use App\Filters\GenreFilters;
use App\Filters\MovieFilters;
use App\Models\Genre;
use App\Models\Movie;
use App\Repositories\MovieRepo;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
    }

    public function search(Request $request, MovieFilters $movieFilters, GenreFilters $genreFilters)
    {
        $genre = Genre::filter($genreFilters)->get();
        $movie = Movie::filter($movieFilters);
        $genres = Genre::pluck('name', 'id');

        $results = $movie->whereHas('genres', function ($query) use ($genreFilters) {
            $genreFilters->apply($query);
        })->paginate(6);

        $years = $this->movieRepo->released_date();

        return view('movies.search', compact('results', 'genres', 'years'));

    }

}
