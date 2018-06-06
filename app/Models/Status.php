<?php

namespace App\Models;


class Status extends Model
{
    public $timestamps = false;

    public function movies()
    {
        return $this->hasMany("App\Models\Movie");
    }
}
