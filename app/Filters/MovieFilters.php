<?php

namespace App\Filters;

class MovieFilters extends Filters
{
    protected $filters = [
        'name', 'director_name', 'released_date', 'genre_id', 'min_rating', 'max_rating'
    ];

    public function name($name)
    {
        
        $keywords = preg_split("/[\s,]+/", $name);
        return $this->builder->where(function ($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->orWhere('name', 'LIKE', "%{$keyword}%");
                $query->orWhere('director_name', 'LIKE', "%{$keyword}%");
            }
        });
    }
     

    public function min_rating($min_rating)
    {
        // dd($min_rating);
        return $this->builder->where('rating', '>=', $min_rating);
    }

    public function max_rating($max_rating)
    {
        return $this->builder->where('rating', '<=', $max_rating);
    }

    public function released_date($released_date)
    {
        // dd($released_date);
        return $this->builder->whereYear('released_date', $released_date);
    }

}
