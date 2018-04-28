<?php

namespace App;


class Genre extends Model
{
    

    public function scopeDeleteid($query, $id)
    {
    	return $query->where('id', '=' , $id)->delete();
    }

    public function scopeShowslug($query, $slug)
    {
    	return $query->where('slug', $slug)->get();
    }

    public function movies()
    {
    	return $this->belongsToMany(Movie::class);
    }
}
