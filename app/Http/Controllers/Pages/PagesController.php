<?php

namespace App\Http\Controllers\Pages;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\MovieRepo;

class PagesController extends Controller
{
    protected $movieRepo;

    public function __construct(MovieRepo $movieRepo)
    {
        $this->movieRepo = $movieRepo;
        // $this->middleware('auth');
    }

    public function index()
    {
        $movies = $this->movieRepo->all();
        return view('pages.index', compact('movies'));
    }
}
