<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PswdController extends Controller
{
    public function store(Request $request) {

        $validation = $this->validate($request, [
            'password' => 'string'
        ]);

        if(!$validation) {
            return response()->json([
                'message' => 'Chyba'
            ], 400);
        }

        $user = $request->user();
        $user->password = Hash::make($request->password);
        $user->pswdChanged = true;
        $user->save();

        return response()->json([
            'user' => $user

        ], 200);
    }

    public function check(Request $request) {
        $password = $request->user()->password;

        if (!Hash::check($request->password, $password)) {
            return response()->json([
                'result' => false
            ], 200);
        }

        return response()->json([
            'result' => true
        ], 200);
    }
}
