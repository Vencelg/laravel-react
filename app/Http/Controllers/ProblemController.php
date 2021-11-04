<?php

namespace App\Http\Controllers;

use App\Models\Problem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\ProblemCreatedNotification;
use Illuminate\Support\Facades\Notification;

class ProblemController extends Controller
{
    public function store(Request $request)
    {

        $allAdmins = User::where('admin', true)->get();

        /* return response()->json([
            "lmao"=>$allAdmins
        ]); */

        $this->validate($request, [
            'name' => 'string|required',
            'description' => 'string|required',
            'room' => 'string|required'
        ]);
        
        

        $problem = $request->user()->problems()->create([
            'name' => $request->name,
            'description' => $request->description,
            'room' => $request->room,
        ]);

        Notification::send($allAdmins, new ProblemCreatedNotification());

        /* foreach ($allAdmins as $admin) {
            $admin->notify(new ProblemCreatedNotification());
        } */

        return response()->json([
            $problem,
            $request->user()
        ]);
    }

    public function show()
    {

        function problemsLoop()
        {
            $problems = Problem::all();

            foreach ($problems as $problem) {
                $username = $problem->user->name;
            }

            return $problems;
        }

        return response(problemsLoop());
    }
    //One problem things
    public function showOne($id)
    {

        $problem = Problem::find($id);
        $problemAuthor = $problem->user;

        return response()->json([
            'problem' => $problem
        ]);
    }
    public function storeOne(Request $request, $id)
    {
        $problem = Problem::find($id);
        $problem->update($request->all());
        $problem->save();

        return response()->json([
            $problem,
            $request->user()
        ]);
    }
    public function deleteOne(Request $request, $id)
    {
        $problem = Problem::find($id);
        $problem->delete();

        return response()->json([
            'message' => 'Deleted'
        ]);
    }
}
