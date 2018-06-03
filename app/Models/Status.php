<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public $timestamps = false;
    protected $guarded = [];

    public function movies()
    {
        return $this->hasMany("App\Models\Movie");
    }
}
