<?php

namespace App\Http\Middleware;

use App\Models\Problem;
use Closure;
use Illuminate\Http\Request;

class isCreator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $problemId = $request->segments()[2];
        $problem = Problem::find($problemId);
        if (auth()->user()->admin == 0 && auth()->user()->id != $problem->user_id) {
            return response()->json([
                'message' => 'Unauthorized isCreatorMiddleware'
            ]);
        }
        return $next($request);
    }
}
