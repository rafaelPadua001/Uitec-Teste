<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Products\ProductsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getProducts', [ProductsController::class, 'index']);
Route::post('/create', [ProductsController::class, 'create']);
Route::post('/update/{id}', [ProductsController::class, 'update']);
Route::post('/delete/{id}', [ProductsController::class, 'destroy']);
