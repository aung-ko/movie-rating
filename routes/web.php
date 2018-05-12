<?php

Auth::routes();

Route::prefix('admin')->group(function () {
    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('admin.dashboard');
});

Route::prefix('movies')->group(function () {
    Route::get('/', 'Movie\MovieController@index')->name('movies.index');
});

Route::get('/', 'Pages\PagesController@index')->name('index');
