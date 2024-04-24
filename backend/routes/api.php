<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:api')->group(function () {
    Route::controller(TransactionController::class)->group(function(){
        Route::get('/transactions', 'get');
        Route::post('/transactions', 'store');
        Route::put('/transactions/{id}', 'update');
        Route::delete('/transactions/{id}', 'destroy');
    });
});
