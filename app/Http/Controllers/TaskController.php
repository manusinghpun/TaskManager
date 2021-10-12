<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /*$tasks = Task::with('users','replies')
                                            ->where('created_by',Auth::user()->user_id)
                                            ->orwhere('user_id',Auth::user()->user_id)
                                            ->orderBy('created_at','desc')->get();
        */
       // $tasks = Task::whereHas('users')->orderBy('created_at','desc')->get();
       /*
       $tasks = Task::whereHas('users','replies', function ($query)
        {
           $query->where('users.user_id',Auth::user()->user_id);
        } )
       ->orwhere('created_by',Auth::user()->user_id)
        ->orderBy('created_at','desc')->get();

        */
        
        $value = Auth::user()->user_id;
        if (Auth::user()->role == 'administrator')
        {
            $tasks = Task::with(['users','replies'])->orderBy('created_at','desc')->get();
        } else 
        {
            $tasks = Task::with(['users','replies'])
            ->whereHas('users', function($q) use ($value) {
                $q->where('users.user_id', '=', $value);
            })
            ->orwhere('created_by',Auth::user()->user_id)
            ->orderBy('created_at','desc')->get();
        }
        


        return response()->json($tasks, 200);
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

    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:2',
            'pdc' => 'required',
            'status' => 'required',
            'assign_to' => 'required',

        ]);

        $task = new Task();
        
        $task->name = $request->name;
        $task->pdc = $request->pdc;
        $task->status = $request->status;
        $task->description = $request->description;
        $task->created_by = Auth::user()->user_id;

        if ($task->save()){
            $tags = array_map('intval', explode(',',$request->assign_to));
            $task->users()->attach($tags);
            $task->load('users');

            return response()->json($task,200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }


    }

   
    public function show(Task $task)
    {
       // return response()->json($task, 200);
       return $task->load('replies');
    } 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
            $request->validate([
                'id' => 'required,integer',
                'name' => 'required|min:2',
                'pdc' => 'required',
                'status' => 'required',
                'assign_to' => 'required',
            ]);
    
            $task->name = $request->name;
            $task->pdc = $request->pdc;
            $task->status = $request->status;
            $task->description = $request->description;
            $task->created_by = Auth::user()->user_id;
      
           // dd($request->assign_to);
       
            if ($task->save()){
                if ($request->assign_to !='undefined' )
                {
                    $tags = array_map('intval', explode(',',$request->assign_to));
                    $task->users()->attach($tags);
                    $task->load('users');

                } 

                return response()->json($task,200);

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
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        if ($task->delete()) {
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
