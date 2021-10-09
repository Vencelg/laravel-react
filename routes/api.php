<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProblemController;
use App\Http\Controllers\RefreshController;
use App\Models\Problem;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/*

    */
Route::group(['middleware'=>['auth:sanctum']], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/problems', [ProblemController::class, 'show']);

    Route::post('/problems', [ProblemController::class, 'store']);

    Route::get('/refresh', [RefreshController::class, 'index']);
});

Route::post('/login', [LoginController::class, 'store']);
