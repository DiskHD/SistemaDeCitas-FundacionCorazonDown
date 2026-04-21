@extends('layouts.app')

@section('title', 'Iniciar Sesión')

@section('styles')
<style>
    body { display: flex; flex-direction: column; }
    main { display: flex; justify-content: center; align-items: flex-start; padding-top: 4rem; }

    .card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,.08);
        padding: 2.25rem 2.5rem;
        width: 100%;
        max-width: 420px;
    }
    .card h1 {
        font-size: 1.5rem;
        color: #1e40af;
        margin-bottom: .375rem;
    }
    .card .subtitle { color: #64748b; font-size: .9rem; margin-bottom: 1.75rem; }

    .form-group { margin-bottom: 1.1rem; }
    label { display: block; font-size: .875rem; font-weight: 600; color: #374151; margin-bottom: .35rem; }
    input[type="email"],
    input[type="password"],
    input[type="text"] {
        width: 100%;
        padding: .6rem .85rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: .95rem;
        color: #1a202c;
        transition: border-color .2s, box-shadow .2s;
        outline: none;
    }
    input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,.2); }

    .error-msg { color: #dc2626; font-size: .82rem; margin-top: .3rem; }

    .remember { display: flex; align-items: center; gap: .5rem; font-size: .875rem; color: #374151; margin-bottom: 1.25rem; }
    .remember input { width: auto; }

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
    }
    .btn-primary:hover { background: #1d4ed8; }

    .divider { text-align: center; margin: 1.2rem 0; color: #9ca3af; font-size: .875rem; }
    .link { color: #1e40af; text-decoration: none; font-weight: 500; }
    .link:hover { text-decoration: underline; }
</style>
@endsection

@section('content')
<div class="card">
    <h1>Iniciar Sesión</h1>
    <p class="subtitle">Ingresa tus credenciales para continuar.</p>

    <form method="POST" action="{{ route('login.post') }}">
        @csrf

        <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                value="{{ old('email') }}"
                placeholder="usuario@ejemplo.com"
                required
                autofocus
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
                placeholder="••••••••"
                required
            >
            @error('password')
                <p class="error-msg">{{ $message }}</p>
            @enderror
        </div>

        <label class="remember">
            <input type="checkbox" name="remember"> Recordarme
        </label>

        <button type="submit" class="btn-primary">Entrar</button>
    </form>

    <p class="divider">¿No tienes cuenta?</p>
    <p style="text-align:center">
        <a href="{{ route('register') }}" class="link">Regístrate aquí</a>
    </p>
</div>
@endsection
