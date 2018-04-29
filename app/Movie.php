<?php

namespace App;


class Movie extends Model
{

	protected $casts = [
		'genre_id' => 'array',
		
	];

    public function scopeDeleteslug($query, $slug)
    {
    	return $query->where('slug', $slug);
    }


    public function genres()
    {
    	return $this->belongsToMany(Genre::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }


}
