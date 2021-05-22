<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\WorkspaceController;

Route::group([

    'middleware' => 'api',

], function ($router) {



    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('me', [AuthController::class, 'me']);
    Route::post('sendPasswordResetLink',[ResetPasswordController::class, 'sendEmail']);
    Route::post('resetPassword',[ChangePasswordController::class, 'process']);
    Route::post('workspaceAddItem',[WorkspaceController::class,'addWorkspaceData']);
    Route::get('workspaceGetItem',[WorkspaceController::class,'viewWorkspaceData']);
    Route::get('usersGetData',[WorkspaceController::class,'viewUsersData']);

    });



    // Route::post('login', 'App\Http\Controllers\AuthController@login');
    // Route::post('signup', 'App\Http\Controllers\AuthController@signup');
    // Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    // Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    // Route::post('me', 'App\Http\Controllers\AuthController@me');

// });
