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


Route::resource('movie', 'MovieController')->except(['edit', 'show']);

Route::get('movie/{movie}/edit', 'MovieController@edit');
Route::get('movie/{movie}', 'MovieController@show');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



Route::resource('movie/genre', 'GenreController')->except(['edit', 'show', 'index', 'create']);
Route::get('movie/genre/{genre}', 'GenreController@show');
Route::get('/genre/{genre}/edit', 'GenreController@edit')->name('genre.edit');
Route::get('/genre', 'GenreController@index')->name('genre.index');
Route::get('/genre/create', 'GenreController@create')->name('genre.create');


Route::resource('image', 'ImageController');


