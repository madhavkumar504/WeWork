<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Http\Middleware\CORS;

class CORS
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

    // header("Access-Control-Allow-Origin", "*");
    // header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

        header('Access-Control_Allow-Origin : *');
        header('Access-Control_Allow-Headers : Content-type, X-Auth-Token, Authorization, Origin');
        return $next($request);
    }
}
