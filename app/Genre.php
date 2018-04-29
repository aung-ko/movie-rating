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
    	return $this->belongsToMany(Movie::class);
    }


    public function getRouteKeyName()
    {
        return 'slug';
    }
}
