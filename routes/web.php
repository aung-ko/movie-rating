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

    Route::get('status', 'Admin\StatusController@index')->name('admin.status');
    Route::post('status/store', 'Admin\StatusController@store')->name('admin.status.store');
    Route::delete('status/delete/{status}', 'Admin\StatusController@destroy')->name('admin.status.delete');

    Route::get('users', 'Admin\UserController@index')->name('admin.users');
    Route::get('users-d', 'Admin\UserController@userData')->name('admin.users.data');
    Route::post('ban/{user}', 'Admin\UserController@banUser')->name('admin.ban.user');
    Route::post('unban/{user}', 'Admin\UserController@UnBanUser')->name('admin.unban.user');
});

Route::prefix('movie')->group(function () { 
    Route::get('{movie}', 'Movie\MovieController@show')->name('movie.show');

    Route::get('{movie}/reviews', 'Movie\ReviewController@allReviews')->name('review.all');
    Route::get('{movie}/review/create', 'Movie\ReviewController@create')->name('review.create');
    Route::post('{movie}/review', 'Movie\ReviewController@store')->name('review.store');
    Route::get('{movie}/review/{review}', 'Movie\ReviewController@show')->name('review.show');
    Route::get('{movie}/review/{review}/edit', 'Movie\ReviewController@edit')->name('review.edit');
    Route::patch('{movie}/review/{review}', 'Movie\ReviewController@update')->name('review.update');
    
    Route::delete('{movie}/review/{review}', 'Movie\ReviewController@destroy')->name('review.destroy');
  
    Route::post('{movie}/review/{review}/reply', 'Movie\ReplyController@store')->name('reply.store');
    Route::get('{movie}/review/{review}/reply/{reply}/edit', 'Movie\ReplyController@edit')->name('reply.edit');
    Route::patch('{movie}/review/{review}/reply/{reply}', 'Movie\ReplyController@update')->name('reply.update');
    Route::delete('{movie}/review', 'Movie\ReplyController@destroy')->name('reply.destroy');

});


Route::get('/search', 'SearchController@search');
// Route::get('/users', 'SearchController@search');

Route::prefix('/')->group(function(){
    Route::get('/', 'Pages\PagesController@index')->name('index');  
    Route::get('/user/{user}', 'ProfileController@profile')->name('user');
    Route::patch('/user/{user}', 'ProfileController@updateProfile')->name('profile.update');
    
});

// Route::get('/','ChatController@chat');
Route::post('send','ChatController@send');
Route::post('saveToSession','ChatController@saveToSession');
Route::post('deleteSession','ChatController@deleteSession');
Route::post('getOldMessage','ChatController@getOldMessage');
Route::get('check',function(){
    return session('chat');
});


