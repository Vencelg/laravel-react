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
            'room' => 'string|required',
        ]);


        $problem = $request->user()->problems()->create([
            'name' => $request->name,
            'description' => $request->description,
            'room' => $request->room,
            'fixed' => 'Čekající'
        ]);


        Notification::send($allAdmins, new ProblemCreatedNotification());

        function problemWithUser($problem)
        {
            $user = $problem->user;
            return $problem;
        }

        return response()->json([
            problemWithUser($problem),
        ], 200);
    }

    public function show()
    {

        function problemsLoop() :array
        {
            $problems = Problem::all();
            foreach ($problems as $problem) {
                $username = $problem->user->name;
            }

            return $problems->toArray();
        }

        return response(array_reverse(problemsLoop()), 200);
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
                'message' => 'Problem neexistuje'
            ], 400);
        }

        $problem->delete();

        return response()->json([
            'message' => 'Problem smazán'
        ], 200);
    }
}
