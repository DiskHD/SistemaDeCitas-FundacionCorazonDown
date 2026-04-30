<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;

// ─── Página principal ─────────────────────────────────────────────────────────
Route::get('/', function () {
    if (auth()->check()) {
        return redirect(auth()->user()->dashboardRoute());
    }
    return redirect()->route('login');
});

// ─── Rutas de autenticación (solo para invitados) ─────────────────────────────
Route::middleware('guest')->group(function () {
    Route::get('/login',    [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login',   [AuthController::class, 'login'])->name('login.post');

    Route::get('/register',  [RegisterController::class, 'showRegisterForm'])->name('register');
    Route::post('/register', [RegisterController::class, 'register'])->name('register.post');
});

// ─── Logout (requiere autenticación) ─────────────────────────────────────────
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');

// ─── Rutas del Administrador ──────────────────────────────────────────────────
Route::middleware(['auth', 'role:administrador'])->group(function () {
    Route::get('/admin/dashboard', [AppointmentController::class, 'adminDashboard'])->name('admin.dashboard');

    // Citas
    Route::get('/admin/citas',                       [AppointmentController::class, 'adminIndex'])->name('admin.citas.index');
    Route::get('/admin/citas/{appointment}/edit',    [AppointmentController::class, 'adminEdit'])->name('admin.citas.edit');
    Route::put('/admin/citas/{appointment}',         [AppointmentController::class, 'adminUpdate'])->name('admin.citas.update');
    Route::patch('/admin/citas/{appointment}/cancel',[AppointmentController::class, 'adminCancel'])->name('admin.citas.cancel');
    Route::patch('/admin/citas/{appointment}/complete',[AppointmentController::class, 'adminComplete'])->name('admin.citas.complete');
    Route::delete('/admin/citas/{appointment}',      [AppointmentController::class, 'adminDestroy'])->name('admin.citas.destroy');
});

// ─── Rutas de la Recepcionista ────────────────────────────────────────────────
Route::middleware(['auth', 'role:recepcionista'])->group(function () {
    Route::get('/recepcionista/dashboard', [AppointmentController::class, 'recepcionistaDashboard'])->name('recepcionista.dashboard');

    // Citas
    Route::get('/recepcionista/citas',                        [AppointmentController::class, 'recepcionistaIndex'])->name('recepcionista.citas.index');
    Route::get('/recepcionista/citas/create',                 [AppointmentController::class, 'recepcionistaCreate'])->name('recepcionista.citas.create');
    Route::post('/recepcionista/citas',                       [AppointmentController::class, 'recepcionistaStore'])->name('recepcionista.citas.store');
    Route::get('/recepcionista/citas/{appointment}/edit',     [AppointmentController::class, 'recepcionistaEdit'])->name('recepcionista.citas.edit');
    Route::put('/recepcionista/citas/{appointment}',          [AppointmentController::class, 'recepcionistaUpdate'])->name('recepcionista.citas.update');
    Route::patch('/recepcionista/citas/{appointment}/cancel', [AppointmentController::class, 'recepcionistaCancel'])->name('recepcionista.citas.cancel');
});

// ─── Rutas del Terapeuta ──────────────────────────────────────────────────────
Route::middleware(['auth', 'role:terapeuta'])->group(function () {
    Route::get('/terapeuta/dashboard', [AppointmentController::class, 'terapeutaDashboard'])->name('terapeuta.dashboard');

    // Citas
    Route::get('/terapeuta/citas',                          [AppointmentController::class, 'terapeutaIndex'])->name('terapeuta.citas.index');
    Route::patch('/terapeuta/citas/{appointment}/complete', [AppointmentController::class, 'terapeutaComplete'])->name('terapeuta.citas.complete');
});