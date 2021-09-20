<?php

namespace App\Http\Controllers;

use App\Models\Problem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProblemController extends Controller
{
    public function store(Request $request)
    {
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
}
