<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Movie Route
Route::resource('movie', 'MovieController')->except(['edit', 'show']);
Route::get('movie/{slug}/edit', 'MovieController@edit');
Route::get('movie/{slug}', 'MovieController@show');
//Review Route
Route::resource('review', 'ReviewController')->except(['edit', 'show']);
Route::get('review/{slug}/edit', 'ReviewController@edit');
Route::get('review/{slug}', 'ReviewController@show');


Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
