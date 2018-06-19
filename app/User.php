<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'slug'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role()
    {
        $this->belongsTo('App\Role');
    }

    public function isAdmin()
    {
        return $this->role_id == 1;
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

    public function replys()
    {
        return $this->hasMany('App\Models\Reply');
    }


    public function getRouteKeyName()
    {
        return 'slug';
    }
}
