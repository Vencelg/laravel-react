<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PswdController extends Controller
{
    public function store(Request $request) {
        //dodělat pswd confirm
        $this->validate($request, [
            'password' => 'string'
        ]);

        $user = $request->user();

        $user->password = Hash::make($request->password);
        $user->pswdChanged = true;
        $user->save();

        return response()->json([
            'message' => 'Heslo bylo změněno'
        ], 200);
    }
}
