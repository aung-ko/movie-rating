<?php

namespace App;


class Movie extends Model
{

	protected $casts = [
		'genre_id' => 'array',
		
	];

    public function scopeDeleteid($query, $id)
    {
    	return $query->where('id', '=' , $id)->delete();
    }


    public function genres()
    {
    	return $this->belongsToMany('App\Genre', 'genres_movies', 'movie_id', 'genre_id');
    }
}
