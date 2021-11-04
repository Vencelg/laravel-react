<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class VerificationController extends Controller
{
    public function verify($user_id, Request $request) {
        if(!$request->hasValidSignature()) {
            return response()->json(["message" => "Váš odkaz je neplatný nebo vypršel."], 401);
        }

        $user = User::findOrFail($user_id);

        if(!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return response()->json([
            'message'=>'Váš email byl ověřen'
        ]);
    }

    public function resend(Request $request) {
        $user = $request->user();

        if(!$user->hasVerifiedEmail()) {
            return response()->json([
                'message'=>'Váš email je již ověřen'
            ]);
        }
        

        $request->user()->sendEmailVerificationNotification();

        return response()->json(["message" => "váš odkaz byl zaslán"]);
    
    }
}
