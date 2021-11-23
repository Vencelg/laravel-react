<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class pswdSet
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
        if(auth()->user()->pswdChanged != 1) {
            return response()->json([
                'message' => 'Unauthorized PswdSet Middleware'
            ]);
        }
        return $next($request);
    }
}
