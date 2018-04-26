<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
	protected $fillable = ['review_name', 'user_id', 'movie_id', 'description', 'slug'];

    public function scopeDeleteid($query, $id)
    	{	
    		return $query->where('id', '=' , $id)->delete();
    	}
    public function review()
    {
        return $this->hasMany(Review::class);
    }

}
