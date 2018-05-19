<?php

Auth::routes();

Route::prefix('admin')->group(function () {
    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('admin.dashboard');
    Route::get('movies', 'Admin\AdminController@allMovies')->name('admin.movies');
    Route::get('movies-all', 'Admin\AdminController@anyData')->name('admin.movies.data');
    Route::get('{movie}/edit', 'Admin\AdminController@editMovie')->name('admin.movie.edit');
    Route::patch('update/{movie}', 'Admin\AdminController@updateMovie')->name('admin.movie.update');
    Route::delete('delete/{movie}', 'Admin\AdminController@deleteMovie')->name('admin.movie.delete');
    Route::get('movie/create', 'Admin\AdminController@createMovie')->name('admin.movie.create');
    Route::post('movie/store', 'Admin\AdminController@storeMovie')->name('admin.movie.store');
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
