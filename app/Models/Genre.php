<?php

namespace App\Models;


class Genre extends Model
{
    
    public function movies()
    {
        return $this->belongsToMany("App\Models\Movie", "movie_genres");
    }

    public function scopeFilter($query, $filters)
    {
        // dd($filters);
        $filters->apply($query);
    }
}
