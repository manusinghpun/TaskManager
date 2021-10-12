<?php

namespace App\Http\Controllers;

use App\event;
use App\Task;
use App\Category;
use Auth;
use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\CalendarCollection as CalendarResource;




use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {      
        //return CalendarResource::collection(Event::all());
        $value = Auth::user()->user_id;
        if (Auth::user()->role == 'administrator')
        {
            return CalendarResource::collection(
                Task::with(['users','replies'])->orderBy('created_at','desc')->get());
        } else 
        {
            return CalendarResource::collection(
                Task::with(['users','replies'])
                        ->whereHas('users', function($q) use ($value) {
                            $q->where('users.user_id', '=', $value);
                        })
                        ->orwhere('created_by',Auth::user()->user_id)
                        ->orderBy('created_at','desc')->get()
            );
        }
        

        
    }

    public function filterCalendar(Request $request)
    {

        if ( count($request->all()) > 0){
            return CalendarResource::collection(Event::whereIN('category_id',$request)->get());
        } 
        else {
            return CalendarResource::collection(Event::all());
        }
         
    }
}
