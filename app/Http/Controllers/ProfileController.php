<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function profile(User $user)
    {
        if ($user->isAdmin() && auth()->user()->isAdmin()) {
            return view('admin.profile', compact('user'));
        } else {
            if($user->isAdmin()){
                return redirect()->back();
            }

            $reviews = Review::latest()->where('user_id', $user->id)->paginate(5);
            return view('pages.user', compact(['user', 'reviews']));
        }
    }

    public function updateProfile(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:3|max:255',
            'img' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'bio' => 'string|max:255|nullable',
        ]);

        $path = 'public/users/';

        if ($request->hasfile('img')) {
            $validated['img'] = $this->uploadOneImage($request, 'img', $path);
        }

        $user->update($validated);

        return back();
    }

    protected function uploadOneImage(Request $request, $file, $path)
    {
        $image = $request->file($file);
        $name = hash('md5', rand(100, 999), false) . '.' . $image->getClientOriginalExtension();
        $image->storeAs($path, $name);

        return $name;
    }

}
