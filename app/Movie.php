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


    
    public function scopeShowslug($query, $slug)
    {
        return $query->where('slug', $slug)->get();
    }


    public function genres()
    {
    	return $this->belongsToMany(Genre::class);
    }



}
