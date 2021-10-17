<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Problem;
use Illuminate\Http\Request;

class isAdmin
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
        if(!auth()->user()->admin == 1) {
            return response()->json([
                'message' => 'Unauthorized kokote'
            ]);
        }
        return $next($request);
    }
}
