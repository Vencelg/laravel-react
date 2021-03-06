<?php

use App\Http\Controllers\AdminController;
use App\Models\Problem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ProblemController;
use App\Http\Controllers\PswdController;
use App\Http\Controllers\RefreshController;
use App\Http\Controllers\VerificationController;

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
//Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('password/change', [PswdController::class, 'store']);
    Route::post('password/check', [PswdController::class, 'check']);

        //Route::post('email/resend', [VerificationController::class, 'resend']);
        Route::get('/problems', [ProblemController::class, 'show']);
        Route::get('/problem/{id}', [ProblemController::class, 'showOne']);
        Route::post('/problems', [ProblemController::class, 'store']);
        Route::get('/refresh', [RefreshController::class, 'index']);
        Route::post('/logout', [LogoutController::class, 'index']);

        Route::group(['middleware' => ['isAdmin']], function () {
            Route::get('/admin/users', [AdminController::class, 'show']);
            Route::delete('/admin/users/{id}', [AdminController::class, 'delete']);
            Route::post('/admin/users', [AdminController::class, 'store']);
            Route::post('/problem/{id}', [ProblemController::class, 'storeOne']);
        });

        Route::group(['middleware' => ['isCreator']], function () {
            Route::delete('/problem/{id}', [ProblemController::class, 'deleteOne']);
        });

});


Route::post('/login', [LoginController::class, 'store'])->name('login');
