<?php

namespace App\Models;


class Movie extends Model
{
   

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function genres()
    {
        return $this->belongsToMany("App\Models\Genre", "movie_genres");
    }

    public function status()
    {
        return $this->belongsTo("App\Models\Status");
    }

    public function scopeFilter($query, $filters)
    {
        // dd($filters);
        $filters->apply($query);
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }
}
