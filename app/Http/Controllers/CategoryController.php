<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('created_at','desc')->paginate(10);
        return response()->json($categories, 200);
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
            'name' => 'required|min:2|unique:categories',
            'color' => 'required',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->color = $request->color;


        if ($category->save()){
            return  response()->json($category, 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
        
        //dd($request->all());
    }

    
    public function show(Category $category)
    {
        //
    }

    
    public function edit(Category $category)
    {
        //
    }

    
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:2',
            'color' => 'required',
        ]);

        $category->name = $request->name;
        $category->color = $request->color;
       
        if ($category->save()){
            //updating the newsItem will cause an activity being logged
           // $activity = Activity::all()->last();

            return response()->json($category,200);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->delete()) {
            Storage::delete($category->image);
            //deleting the newsItem will cause an activity being logged
           // $activity = Activity::all()->last();

            return response()->json([
                'message' => 'Category deleted successfully!',
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
