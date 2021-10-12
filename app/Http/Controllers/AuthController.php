<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function index()
    {
        $users = User::orderBy('created_at','desc')->paginate(100);
        return response()->json($users, 200);
    }

    public function register(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'user_id' => 'required|integer|unique:users|min:3',
            'password' => 'required|string|confirmed|min:8',
            'role' => 'required|string'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->user_id = $request->user_id;
        $user->role = $request->role;
        $user->password = bcrypt($request->password);

        if($user->save()){
            return response()->json($user,200);
        } else {
            return response()->json([
                'message' => 'some error occured, please try again!',
                'status_code' => 500
            ],500);
        }
    }

    public function update(Request $request, User $user)
    {
        //dd($request);
        $request->validate([
            'name' => 'required|string|max:255',
            'user_id' => 'required|string|min:3',
            'password' => 'required|string|confirmed|min:8',
            'role' => 'required|string'
        ]);

        $user->name = $request->name;
        $user->user_id = $request->user_id;
        $user->role = $request->role;
        $user->password = bcrypt($request->password);
        if ($user->save()){
            return response()->json($user,200);
        } else {
             return response()->json([
                'message' => 'Some error occured, Please try again',
                'status_code' => 500
             ],500);
        }
    }

    public function login (Request $request){
        $request->validate([
            'remember_me' => 'boolean',
            'user_id' => 'required|string',
            'password' => 'required|string'
        ]);
        if(!Auth::attempt(['user_id' => $request->user_id, 'password' => $request->password])){
            return response()->json([
                'message' => 'Invalid username or password',
                'status_code' => 401
            ],401);
        } 
        $user = $request->user();

        if($user->role == 'administrator') {
            $tokenData = $user->createToken('Personal Access Tokens', ['administrator']);
        } else {
            $tokenData = $user->createToken('Personal Access Tokens', ['user']);
        }

        $token = $tokenData->token;

        if($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, please try again',
                'status_code' => 500
            ], 500);
        }
    }

    public function logout (Request $request) {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully',
            'status_code' => 200
        ],200);

    }

    public function profile(Request $request){
        if($request->user()){
            return response()->json($request->user(), 200);
        }
        return response()->json([
            'message' => 'Not logged in',
            'status_code' => 500
        ], 500);
    }

    public function destroy(User $user)
    {
        if(Auth::user()->user_id == $user->user_id){
            abort(401, 'You can not delete yourself.');
        };

        if ($user->delete()) {
            return response()->json([
                'message' => 'User deleted successfully!',
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
