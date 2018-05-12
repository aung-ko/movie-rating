<?php

namespace App\Repositories;

use App\Models\Movie;
    
class MovieRepo
{
    public function all()
    {
        return Movie::all();
    }
}
