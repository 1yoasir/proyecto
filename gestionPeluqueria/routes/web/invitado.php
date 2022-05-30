<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('invitado');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/inicio', function () {
    return view('invitado');
});

Route::get('/servicios', function () {
    return view('invitado');
});

Route::get('/equipo', function () {
    return view('invitado');
});

Route::get('/sobreNosotros', function () {
    return view('invitado');
});