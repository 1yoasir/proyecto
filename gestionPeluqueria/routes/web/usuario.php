<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::middleware(['auth'])->group(function(){
    Route::prefix('cliente')->group(function(){
        Route::get('/', function () {
            return view('usuario');
        });
        Route::get('/citas', function () {
            return view('usuario');
        });
        Route::get('/citas/crear', function () {
            return view('usuario');
        });
        Route::get('/servicios', function () {
            return view('usuario');
        });
    });
});

Route::middleware(['auth'])->group(function(){
    Route::prefix('trabajador')->group(function(){
        Route::get('/', function () {
            return view('usuario');
        });
        Route::get('/citas', function () {
            return view('usuario');
        });
        Route::get('/horario', function () {
            return view('usuario');
        });
        Route::get('/horario/editar', function () {
            return view('usuario');
        });
    });
});


?>