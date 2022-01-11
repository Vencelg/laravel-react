<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class VerificationController extends Controller
{
    public function verify(EmailVerificationRequest $request)
    {


        if ($request->user()->hasVerifiedEmail()) {
            return [
                'message' => 'Email je již ověřen'
            ];
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return response()->json([
            'message' => 'Váš email byl ověřen'
        ]);
    }

    public function resend(Request $request)
    {
        $user = $request->user();


        if ($user->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Váš email je již ověřen'
            ]);
        }


        $request->user()->sendEmailVerificationNotification();

        return response()->json(["message" => "váš odkaz byl zaslán"]);

    }
}
