<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Status;

class StatusController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $status = Status::all();
        return view('admin.status.index', compact('status'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:200',
        ]);
        Status::create($validated);
        return redirect()->route('admin.status');
    }

    public function destroy(Status $status)
    {
        $genre->delete();
        return redirect()->back();
    }
}
