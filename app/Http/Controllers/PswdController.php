<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PswdController extends Controller
{
    public function store(Request $request, $id) {
        // name inputu musí být password_confirmed
        $this->validate($request, [
            'password' => 'string'
        ]);

        $user = User::find($id);

        $user->password = Hash::make($request->password);
        $user->pswdChanged = true;
        $user->save();

        return response()->json([
            'message' => 'Heslo bylo změněno'
        ]);
    }
}
