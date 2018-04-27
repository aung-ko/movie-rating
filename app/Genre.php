<?php

namespace App;


class Genre extends Model
{
    

    public function scopeDeleteid($query, $id)
    {
    	return $query->where('id', '=' , $id)->delete();
    }

    public function movies()
    {
    	return $this->belongsToMany('App\Movie', 'genres_movies', 'genre_id', 'movie_id');
    }
}
