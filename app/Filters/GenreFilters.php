<?php

namespace App\Filters;

class GenreFilters extends Filters
{
    protected $filters = [
        'genre_id'
    ];


    public function genre_id($genre_id)
    {
        // dd($genre_id);
        return $this->builder->where('id', '=', $genre_id);
        // dd($this->builder);
    }

}
