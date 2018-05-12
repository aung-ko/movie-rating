<?php

Auth::routes();


Route::prefix('admin')->group(function () {
    Route::get('dashboard', 'Admin\AdminController@dashboard')->name('admin.dashboard');
});

Route::get('/', 'Pages\PagesController@index')->name('index');
