<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\User;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function profile(User $user)
    {
        if ($user->isAdmin()) {
            return $user;
        } else {
            $reviews = Review::latest()->where('user_id', auth()->user()->id)->paginate(5);
            return view('pages.user', compact(['user', 'reviews']));
        }
    }

    public function updateProfile(Request $request, User $user)
    {
        $validated = $request->validate([
            'img' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $path = 'public/users/' . $movie->slug . '/';

        if ($request->hasfile('img')) {
            $validated['img'] = $this->uploadOneImage($request, 'img', $path);
        }

        $user->update($validated);
    }

    protected function uploadOneImage(Request $request, $file, $path)
    {
        $image = $request->file($file);
        $name = hash('md5', rand(100, 999), false) . '.' . $image->getClientOriginalExtension();
        $image->storeAs($path, $name);

        return $name;
    }

}
