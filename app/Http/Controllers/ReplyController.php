<?php

namespace App\Http\Controllers;

use App\Reply;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            //'content' => 'required|string|min:3',
            'comment' => 'required|string',
            'reply_by' => 'required|string',
            'task_id' => 'required|string',
        ]);

        $reply = new Reply();
        $reply->comment = nl2br($request->comment);
        $reply->task_id = $request->task_id;
        $reply->reply_by = $request->reply_by;

        if ($reply->save()){
            return  response()->json($reply, 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
        
    }


    public function show(Reply $reply)
    {
        //
    }


    public function edit(Reply $reply)
    {
        //
    }

  
    public function update(Request $request, Reply $reply)
    {
        //
    }

   
    public function destroy(Reply $reply)
    {
        //
    }
}
