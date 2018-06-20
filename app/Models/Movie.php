<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $guarded = [];
    //  protected $fillable = [
    //     'name', 'released_date', 'genre_id', 'rating_id'
    // ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function genres()
    {
        return $this->belongsToMany("App\Models\Genre", "movie_genres");
    }

    public function status()
    {
        return $this->belongsTo("App\Models\Status");
    }

    public function scopeFilter($query, $filters)
    {
        // dd($filters);
        $filters->apply($query);
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

    public function recalculateRating()
    {
        $reviews = $this->reviews();
        $avgRating = $reviews->avg('rating');
        $this->rating = round($avgRating, 1);
        $this->rating_count = $reviews->count();
        $this->save();
    }
}
