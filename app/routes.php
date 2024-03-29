<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/static/home', function()
{
	return View::make('index');
});

Route::get('/static/browse', function() {
	return View::make('browse');
});

Route::get('/static/video', function() {
	return View::make('play_video');
});