<?php

namespace App\Http\Controllers;

use App\Todo;
use Auth;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //dd(Auth::user());
        $todos = Todo::orderBy('created_at','desc')->where('create_by',Auth::user()->user_id)->get(); 
        
        return response()->json($todos, 200);
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
            'content' => 'required|string|min:3',
            'status' => 'required|string'
        ]);

        $todo = new ToDo();
        $todo->content = $request->content;
        $todo->status = $request->status;
        $todo->create_by = Auth::user()->user_id;

        if ($todo->save()){
            return  response()->json($todo, 200);
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
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        $request->validate([
            'content' => 'string|required|min:2',
            'status' => 'string|required',
        ]);

        $todo->content = $request->content;
        $todo->status = $request->status;
       
        if ($todo->save()){
            //updating the newsItem will cause an activity being logged
           // $activity = Activity::all()->last();

            return response()->json($todo,200);
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
     * @param  \App\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        if ($todo->delete()) {
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
