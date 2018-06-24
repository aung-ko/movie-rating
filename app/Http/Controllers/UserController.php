<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user(User $user)
    {
    	if($user->isAdmin()){
    		return $user;
    	}else{
    		return view('frontend.user', compact('user'));
    	}
    	
    }
}
