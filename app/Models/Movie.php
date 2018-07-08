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
        $avgRating = round($reviews->avg('rating'), 1);

        $this->rating_level = $this->getRatingLevel($avgRating);

        $this->rating = $avgRating;
        $this->rating_count = $reviews->count();
        $this->save();
    }

    public function getRatingLevel($avgRating)
    {
        if($avgRating > 0.0 && $avgRating < 1.5){
            return 'custom-icon flex-row ginger';
        }
        if($avgRating >= 1.5 && $avgRating < 3.5){
            return 'custom-icon flex-row potato';
        }
        if($avgRating >= 3.5 && $avgRating < 5.0){
            return 'custom-icon flex-row chilis';
        }

    }
}
