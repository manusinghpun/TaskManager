<?php

namespace App\Http\Controllers;

use App\event;
use App\Category;
use Auth;
use Illuminate\Http\Request;


class EventController extends Controller
{
    
    //Display a list of categories
    public function categories(){
        $categories = Category::all();
        return response()->json($categories, 200);

    }

    public function index()
    {
        $events = Event::orderBy('created_at','desc')->get();
        return response()->json($events, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|integer',
            'topic' => 'required|min:3',
            'start_date' => 'required|before_or_equal:finish_date',
            'finish_date' => 'required|after_or_equal:start_date',

            'start_time' => 'required|before_or_equal:finish_time',
            'finish_time' => 'required|after_or_equal:start_time',
        ]);

        $event = new Event();
        $event->topic = $request->topic;
        $event->category_id = $request->category_id;
        $event->start_time = $request->start_date." ".$request->start_time;
        $event->finish_time = $request->finish_date." ".$request->finish_time;
        $event->dressCode = $request->dressCode;
        $event->venue = $request->venue;
        $event->comments = $request->comments;
        $event->fullDay = $request->fullDay;
        $event->author = Auth::user()->name;

        if ($event->save()){
            return  response()->json($event, 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        return response()->json($event, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        if($request->category_id){
            $request->validate([
                'id' => 'required,integer',
                'topic' => 'required|min:3',
                'start_date' => 'required|before_or_equal:finish_date',
                'finish_date' => 'required|after_or_equal:start_date',

                'start_time' => 'required|before_or_equal:finish_time',
                'finish_time' => 'required|after_or_equal:start_time',
            ]);
    
            $event->topic = $request->topic;
            $event->category_id = $request->category_id;
            $event->start_time = $request->start_date." ".$request->start_time;
            $event->finish_time = $request->finish_date." ".$request->finish_time;
            $event->dressCode = $request->dressCode;
            $event->venue = $request->venue;
            $event->comments = $request->comments;
            $event->fullDay = $request->fullDay;
            $event->author = Auth::user()->name;

        } else {
    
            $event->start_time = $request->start_time;
            $event->finish_time = $request->finish_time;
            $event->author = Auth::user()->name;
        }        

       
        if ($event->save()){
            return response()->json($event,200);
        } else {
             return response()->json([
                'message' => 'Some error occured, Please try again',
                'status_code' => 500
             ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        if ($event->delete()) {
            return response()->json([
                'message' => 'Event deleted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
