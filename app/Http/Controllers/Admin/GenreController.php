<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Genre;

class GenreController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $genres = Genre::all();
        return view('admin.genre.index', compact('genres'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:200',
        ]);
        Genre::create($validated);
        return redirect()->route('admin.genres');
    }

    public function edit(Genre $genre)
    {
        return view('admin.genre.edit', compact('genre'));
    }

    public function update(Request $request, Genre $genre)
    {
        $validated = $request->validate([
            'name' => 'required|max:200',
        ]);
        $genre->update($validated);
        return redirect()->route('admin.genres');
    }

    public function destroy(Genre $genre)
    {
        $genre->delete();
        return redirect()->back();
    }
}
