<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use function Symfony\Component\String\b;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        $login = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $login['email'])->first();

        if(!$user || !Hash::check($login['password'], $user->password)) {
            return response()->json([
                'message' => 'Bad creds',
            ], 401);
        }

        $accessToken = $user->createToken('accessToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $accessToken
        ], 200);
    }

}
