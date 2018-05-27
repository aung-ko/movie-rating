<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MovieImage extends Model
{
    protected $guarded = [];

    public function movie()
    {
        return $this->belongsTo("App\Models\Movie");
    }
}
