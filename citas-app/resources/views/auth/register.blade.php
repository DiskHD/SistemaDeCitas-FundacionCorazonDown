@extends('layouts.app')

@section('title', 'Crear Cuenta')

@section('styles')
<style>
    body { display: flex; flex-direction: column; }
    main { display: flex; justify-content: center; align-items: flex-start; padding-top: 3rem; }

    .card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,.08);
        padding: 2.25rem 2.5rem;
        width: 100%;
        max-width: 480px;
    }
    .card h1 { font-size: 1.5rem; color: #1e40af; margin-bottom: .375rem; }
    .card .subtitle { color: #64748b; font-size: .9rem; margin-bottom: 1.75rem; }

    .form-group { margin-bottom: 1.1rem; }
    label { display: block; font-size: .875rem; font-weight: 600; color: #374151; margin-bottom: .35rem; }
    input[type="email"],
    input[type="password"],
    input[type="text"],
    select {
        width: 100%;
        padding: .6rem .85rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: .95rem;
        color: #1a202c;
        background: #fff;
        transition: border-color .2s, box-shadow .2s;
        outline: none;
    }
    input:focus, select:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,.2); }

    .error-msg { color: #dc2626; font-size: .82rem; margin-top: .3rem; }

    .hint { color: #6b7280; font-size: .8rem; margin-top: .3rem; }

    .btn-primary {
        width: 100%;
        padding: .7rem;
        background: #1e40af;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background .2s;
        margin-top: .5rem;
    }
    .btn-primary:hover { background: #1d4ed8; }

    .divider { text-align: center; margin: 1.2rem 0; color: #9ca3af; font-size: .875rem; }
    .link { color: #1e40af; text-decoration: none; font-weight: 500; }
    .link:hover { text-decoration: underline; }

    .notice {
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 8px;
        padding: .75rem 1rem;
        font-size: .85rem;
        color: #1e40af;
        margin-bottom: 1.5rem;
    }
</style>
@endsection

@section('content')
<div class="card">
    <h1>Crear Cuenta</h1>
    <p class="subtitle">Completa el formulario para registrarte.</p>

    <div class="notice">
        ℹ️ El registro está disponible para <strong>recepcionistas</strong> y <strong>terapeutas</strong>.
        Los administradores son creados por el sistema.
    </div>

    <form method="POST" action="{{ route('register.post') }}">
        @csrf

        <div class="form-group">
            <label for="name">Nombre completo</label>
            <input
                type="text"
                id="name"
                name="name"
                value="{{ old('name') }}"
                placeholder="Ana García"
                required
                autofocus
            >
            @error('name')
                <p class="error-msg">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                value="{{ old('email') }}"
                placeholder="usuario@ejemplo.com"
                required
            >
            @error('email')
                <p class="error-msg">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group">
            <label for="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Mínimo 8 caracteres"
                required
            >
            <p class="hint">Mínimo 8 caracteres.</p>
            @error('password')
                <p class="error-msg">{{ $message }}</p>
            @enderror
        </div>

        <div class="form-group">
            <label for="password_confirmation">Confirmar contraseña</label>
            <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="••••••••"
                required
            >
        </div>

        <div class="form-group">
            <label for="role">Rol</label>
            <select id="role" name="role" required>
                <option value="" disabled {{ old('role') ? '' : 'selected' }}>-- Selecciona tu rol --</option>
                <option value="recepcionista" {{ old('role') === 'recepcionista' ? 'selected' : '' }}>Recepcionista</option>
                <option value="terapeuta"     {{ old('role') === 'terapeuta'     ? 'selected' : '' }}>Terapeuta</option>
            </select>
            @error('role')
                <p class="error-msg">{{ $message }}</p>
            @enderror
        </div>

        <button type="submit" class="btn-primary">Registrarme</button>
    </form>

    <p class="divider">¿Ya tienes cuenta?</p>
    <p style="text-align:center">
        <a href="{{ route('login') }}" class="link">Inicia sesión aquí</a>
    </p>
</div>
@endsection
