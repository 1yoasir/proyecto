<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/usuario', function () {
    return view('usuario');
})->middleware('auth');