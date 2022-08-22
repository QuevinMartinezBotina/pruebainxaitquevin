<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::get('/', function () {
    return view('concurso.index');
})->name('concurso.index');

Route::get('/sorteo', function () {
    return view('concurso.admin');
})->name('concurso.sorteo');

Route::get('/select', function () {
    return view('concurso.select');
})->name('concurso.select');
