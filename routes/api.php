<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TaskController;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/tasks/select', [TaskController::class, 'select'])->name('tasks.select');

Route::resource('/tasks', TaskController::class)->only(['index', 'store', 'update', 'show'])->withoutMiddleware(
    VerifyCsrfToken::class);

Route::get('/categories', [CategoryController::class, 'index'])->name('category');
