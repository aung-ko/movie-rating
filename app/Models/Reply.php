<?php

namespace App\Models;


class Reply extends Model
{
    //

    public function review()
    {
    	return $this->belongsTo('App\Models\Review');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
