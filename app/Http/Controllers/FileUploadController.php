<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    //
    public function index() {
    	return view("fileupload");
    }

    public function upload(Request $request) {

    	$request->validate([
    		'myimage'	=> 'image'
    	]);
    	$file = $request->file("myimage");
        
        $old_filename = $file->getClientOriginalName();

        
    	Storage::putFileAS("public/images", $file, $old_filename);
    
    }
}
