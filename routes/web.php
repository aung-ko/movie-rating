<?php

Auth::routes();

Route::prefix('admin')->group(function () {
    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('admin.dashboard');

    Route::get('movies', 'Admin\AdminController@allMovies')->name('admin.movies');
    Route::get('movies-all', 'Admin\AdminController@anyData')->name('admin.movies.data');
    Route::get('movie/{movie}/edit', 'Admin\AdminController@editMovie')->name('admin.movie.edit');
    Route::patch('movie/update/{movie}', 'Admin\AdminController@updateMovie')->name('admin.movie.update');
    Route::delete('movie/delete/{movie}', 'Admin\AdminController@deleteMovie')->name('admin.movie.delete');
    Route::get('movie/create', 'Admin\AdminController@createMovie')->name('admin.movie.create');
    Route::post('movie/store', 'Admin\AdminController@storeMovie')->name('admin.movie.store');

    Route::get('genres', 'Admin\GenreController@index')->name('admin.genres');
    Route::post('genre/store', 'Admin\GenreController@store')->name('admin.genre.store');
    Route::get('genre/{genre}/edit', 'Admin\GenreController@edit')->name('admin.genre.edit');
    Route::patch('genre/update/{genre}', 'Admin\GenreController@update')->name('admin.genre.update');
    Route::delete('genre/delete/{genre}', 'Admin\GenreController@destroy')->name('admin.genre.delete');
    
});

Route::prefix('movie')->group(function () {
    Route::get('/', 'Movie\MovieController@index')->name('movie.index');
    Route::get('{movie}', 'Movie\MovieController@show')->name('movie.show');
    
});

// Route::controller('datatables', 'DatatablesController', [
//     'anyData'  => 'movies.data',
//     'getIndex' => 'datatables',
// ]);



Route::get('/', 'Pages\PagesController@index')->name('index');
