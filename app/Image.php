<?php

namespace App;


class Image extends Model
{
    //
    public function users()
    {
    	return $this->belongsTo(User::class);
    }

    public function genres()
    {
    	return $this->belongsTo(Genre::class);
    }

    public function movies()
    {
    	return $this->belongsTo(Movie::class);
    }
}
