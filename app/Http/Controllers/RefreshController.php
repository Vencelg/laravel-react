<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RefreshController extends Controller
{
    public function index(Request $request) {
        $user = $request->user();
        
        $user->tokens()->delete();

        $access_token = $user->createToken('accessToken')->plainTextToken;

        return response()->json([
            'access_token' => $access_token
        ], 200);
    }
}
