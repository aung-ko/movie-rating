<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
	protected $casts = [
		'genre_id' => 'array',
		
	];

     public function genres()
    {
    	return $this->belongsToMany(Genre::class);
    }
}
