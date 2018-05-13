<?php

Auth::routes();

Route::prefix('admin')->group(function () {
    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('admin.dashboard');
});

Route::prefix('movie')->group(function () {
    Route::get('/', 'Movie\MovieController@index')->name('movie.index');
    Route::get('create', 'Movie\MovieController@create')->name('movie.create');
    Route::post('store', 'Movie\MovieController@store')->name('movie.store');
    Route::get('{movie}', 'Movie\MovieController@show')->name('movie.show');
    Route::get('{movie}/edit', 'Movie\MovieController@edit')->name('movie.edit');
    Route::patch('update/{movie}', 'Movie\MovieController@update')->name('movie.update');
});

Route::get('/', 'Pages\PagesController@index')->name('index');
