<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::prefix('cliente')->group(function(){
    Route::get('/', function () {
        return view('usuario');
    })->middleware('auth');
});


?>