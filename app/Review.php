<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
	protected $fillable = ['review_name', 'user_id', 'movie_id',  'description', 'slug'];

    public function scopeDeleteid($query, $id)
    	{	
    		return $query->where('id', '=' , $id)->delete();
    	}

    public function movie()
    {
        return $this->belongsTo(Movie::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }    	

}
