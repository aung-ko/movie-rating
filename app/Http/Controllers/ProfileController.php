<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function user(User $user)
    {
    	if($user->isAdmin()){
    		return $user;
    	}else{
            $reviews = $user->reviews()->paginate(2);

    		return view('pages.user', compact(['user', 'reviews']));
    	}
    }
    
}
