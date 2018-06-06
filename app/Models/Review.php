<?php

namespace App\Models;


class Review extends Model
{
    public function replys()
    {
    	return $this->hasMany('App\Models\Reply');
    }

    public function movie()
    {
    	return $this->belongsTo('App\Models\Movie');
    }
    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
