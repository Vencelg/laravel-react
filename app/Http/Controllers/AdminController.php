<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Notifications\UserRegistered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Notification;

class AdminController extends Controller
{
    //get na všechny usery done
    //post tvorba usera done s random heslem done
    //delete user done
    
    //DODĚLAT ARGUMENTY V MAILU NA HESLO A EMAIL

    public function show() {
        $users = User::all();

        return response()->json([
            'users' => $users
        ]);
    }

    public function delete($id) {
        $user = User::find($id);

        if(!$user) {
            return response()->json([
                'message' => 'user neexistuje'
            ]);
        }

        $user->delete();

        return response()->json([
            'message' => 'deleted user'
        ]);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'name' =>'string|required',
            'email' => 'string|email|required',
            'admin' => 'bool', //v postmanu bere pouze 1/0 a ne true/false
        ]);

        $emailToValidate['email'] = $request->email; 

        $emailRule = array(
            'email' => 'unique:users,email'
        );
        $emailValidation = Validator::make($emailToValidate, $emailRule);

        if($emailValidation->fails()) {
            return response()->json([
                'error' => 'email je již používán'
            ]);
        }

        $pswdDefault = substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(16))), 0, 16);

        $user = $request->user()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($pswdDefault),
            'admin' => $request->admin
        ]);

        Notification::send($user, new UserRegistered($user->email, $pswdDefault));

        return response()->json([
            'message' => 'user vytvořen',
            'raw heslo' => $pswdDefault,
            'newUser' => $user
        ]);
    }
}
