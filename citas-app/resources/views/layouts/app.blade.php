<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Citas Médicas') — Fundación Corazón Down</title>
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: #f0f4f8; color: #1a202c; min-height: 100vh; }

        /* Navbar */
        nav {
            background: #1e40af;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1.5rem;
            box-shadow: 0 2px 4px rgba(0,0,0,.15);
        }
        nav .brand { font-size: 1.1rem; font-weight: 700; letter-spacing: .5px; }
        nav .nav-right { display: flex; align-items: center; gap: 1rem; font-size: .9rem; }
        nav form button {
            background: rgba(255,255,255,.2);
            border: 1px solid rgba(255,255,255,.4);
            color: #fff;
            padding: .35rem .9rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: .875rem;
            transition: background .2s;
        }
        nav form button:hover { background: rgba(255,255,255,.35); }

        /* Contenido principal */
        main { padding: 2rem 1.5rem; max-width: 900px; margin: 0 auto; }

        /* Alertas */
        .alert {
            padding: .85rem 1.1rem;
            border-radius: 8px;
            margin-bottom: 1.25rem;
            font-size: .925rem;
        }
        .alert-success { background: #d1fae5; border: 1px solid #6ee7b7; color: #065f46; }
        .alert-error   { background: #fee2e2; border: 1px solid #fca5a5; color: #7f1d1d; }
    </style>
    @yield('styles')
</head>
<body>
    <nav>
        <span class="brand">🩺 Citas Médicas — FCD</span>
        @auth
        <div class="nav-right">
            <span>{{ Auth::user()->name }}
                <small style="opacity:.75">({{ ucfirst(Auth::user()->role) }})</small>
            </span>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit">Cerrar sesión</button>
            </form>
        </div>
        @endauth
    </nav>

    <main>
        {{-- Mensajes de sesión --}}
        @if (session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif
        @if (session('error'))
            <div class="alert alert-error">{{ session('error') }}</div>
        @endif

        @yield('content')
    </main>

    @yield('scripts')
</body>
</html>
