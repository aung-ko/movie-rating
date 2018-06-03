<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $guarded = [];
    
    public function movies()
    {
        return $this->belongsToMany("App\Models\Movie", "movie_genres");
    }
}
