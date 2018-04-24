<?php

namespace App;


class Movie extends Model
{
    public function scopeDeleteid($query, $id)
    {
    	return $query->where('id', '=' , $id)->delete();
    }
}
