<?php

namespace App\Http\Controllers;

use App\Models\Problem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\ProblemCreatedNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;

class ProblemController extends Controller
{
    public function store(Request $request)
    {

        $allAdmins = User::where('admin', true)->get();


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


        return response()->json([
            $problem,
            $request->user()
        ], 200);
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

        return response(problemsLoop(), 200);
    }

    //One problem things
    public function showOne($id)
    {

        $problem = Problem::find($id);
        $problemAuthor = $problem->user;

        return response()->json([
            'problem' => $problem
        ], 200);
    }

    public function storeOne(Request $request, $id)
    {
        $problem = Problem::find($id);
        $problem->update($request->all());
        $problem->save();

        function problemWithUser($problemId)
        {
            $problem = Problem::find($problemId);

            $user = $problem->user;

            return $problem;
        }

        return response()->json([
            problemWithUser($id),
        ], 200);
    }

    public function deleteOne(Request $request, $id)
    {
        $problem = Problem::find($id);

        if (!$problem) {
            return response()->json([
                'message' => 'problem neexistuje'
            ], 200);
        }

        $problem->delete();

        return response()->json([
            'message' => 'Deleted'
        ], 200);
    }
}
