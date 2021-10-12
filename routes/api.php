<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group (['prefix' => 'auth'], function (){
    Route::post('register','AuthController@register');
    Route::post('login','AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile', 'AuthController@profile');
    });
});

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::group (['middleware' => 'auth:api'], function (){
    
       /* Route::group(['middleware' => 'scope:user'], function(){
            Route::get('get-categories', 'ProductController@categories');
            Route::resource('events', 'EventController')->except(['store', 'update','destroy']);
            Route::resource('calevents', 'CalendarController');
            Route::post('filterCalendar','CalendarController@filterCalendar');
            Route::resource('todo', 'ToDoController');               
            Route::resource('tasks', 'TaskController');
            Route::resource('replies', 'ReplyController');
            Route::resource('users', 'AuthController');

            //Route::resource('todo', 'ToDoController'); 
            Route::resource('categories', 'CategoryController');
            Route::resource('groups', 'GroupController');
            Route::resource('tasks', 'TaskController');
            Route::resource('replies', 'ReplyController');
            Route::resource('users', 'AuthController');
            Route::resource('ActivityLog', 'ActivityController'); 
            Route::resource('events', 'EventController');
            Route::resource('calevents', 'CalendarController');
            Route::get('get-categories', 'ProductController@categories');
        });
        
            */

       // Route::group(['middleware' => 'scope:administrator'], function(){
            Route::resource('todo', 'ToDoController'); 
            Route::resource('categories', 'CategoryController');
            Route::resource('groups', 'GroupController');
            Route::resource('tasks', 'TaskController');
            Route::resource('replies', 'ReplyController');
            Route::resource('users', 'AuthController');
            Route::resource('ActivityLog', 'ActivityController'); 
            Route::post('export', 'ExportController@card');
            Route::resource('events', 'EventController');
            Route::resource('calevents', 'CalendarController');
            Route::get('get-categories', 'ProductController@categories');
        //});
        
});


