<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Citas Médicas') — Fundación Corazón Down</title>
    <style>
        /* ════════════════════════════════════════════════════════════════
           DESIGN TOKENS
        ════════════════════════════════════════════════════════════════ */
        :root {
            --red:       #ff1717;
            --red-dark:  #cc0000;
            --red-light: #fff0f0;
            --green:     #89cc31;
            --green-dark:#6aaa1e;
            --green-light:#f1fce6;
            --bg:        #f5f5f5;
            --surface:   #ffffff;
            --border:    #e0e0e0;
            --text:      #333333;
            --text-muted:#6b7280;
            --shadow-sm: 0 1px 4px rgba(0,0,0,.08);
            --shadow-md: 0 4px 16px rgba(0,0,0,.10);
            --radius:    10px;
        }

        /* ── Reset ──────────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

        /* ── Navbar ─────────────────────────────────────────────────── */
        nav {
            background: var(--red);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.5rem;
            height: 56px;
            box-shadow: 0 2px 8px rgba(255,23,23,.35);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .nav-brand {
            display: flex;
            align-items: center;
            gap: .6rem;
            font-size: 1rem;
            font-weight: 800;
            letter-spacing: .3px;
            text-decoration: none;
            color: #fff;
        }
        .nav-brand .logo-circle {
            width: 32px; height: 32px;
            background: rgba(255,255,255,.22);
            border: 2px solid rgba(255,255,255,.5);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1rem;
        }
        .nav-right { display: flex; align-items: center; gap: 1rem; font-size: .88rem; }
        .nav-user {
            display: flex; align-items: center; gap: .5rem;
            background: rgba(0,0,0,.12);
            padding: .3rem .9rem;
            border-radius: 20px;
            font-size: .85rem;
        }
        .nav-user .role-badge {
            background: rgba(255,255,255,.25);
            border-radius: 12px;
            padding: .1rem .55rem;
            font-size: .73rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .5px;
        }
        .btn-logout {
            background: rgba(0,0,0,.15);
            border: 1px solid rgba(255,255,255,.3);
            color: #fff;
            padding: .35rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: .83rem;
            font-weight: 600;
            transition: background .15s;
        }
        .btn-logout:hover { background: rgba(0,0,0,.3); }

        /* ── Layout ─────────────────────────────────────────────────── */
        main { padding: 2rem 1.5rem; max-width: 960px; margin: 0 auto; }

        /* ── Alerts ─────────────────────────────────────────────────── */
        .alert {
            padding: .85rem 1.1rem;
            border-radius: var(--radius);
            margin-bottom: 1.25rem;
            font-size: .9rem;
            display: flex;
            align-items: center;
            gap: .6rem;
        }
        .alert-success {
            background: var(--green-light);
            border: 1px solid #b8e87a;
            color: #3a6b00;
        }
        .alert-error {
            background: var(--red-light);
            border: 1px solid #ffaaaa;
            color: #990000;
        }

        /* ── Global shared component styles ─────────────────────────── */

        /* Stat cards */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(max, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .stat-card {
            background: var(--surface);
            border-radius: var(--radius);
            padding: 1.25rem 1.4rem;
            box-shadow: var(--shadow-sm);
            border-top: 4px solid var(--green);
            cursor: pointer;
            transition: transform .18s, box-shadow .18s;
            user-select: none;
        }
        .stat-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .stat-card.open  { box-shadow: var(--shadow-md); }
        .sc-label { font-size: .72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: .7px; }
        .sc-value { font-size: 2.4rem; font-weight: 900; color: var(--green); margin: .25rem 0 .4rem; line-height: 1; }
        .sc-hint  { font-size: .76rem; color: #aaa; }
        .sc-arrow { float: right; margin-top: -2rem; color: var(--green); font-size: .9rem; transition: transform .22s; }
        .stat-card.open .sc-arrow { transform: rotate(180deg); }

        /* Card accordion detail */
        .card-detail { display: none; margin-top: .75rem; border-top: 1px solid var(--border); padding-top: .75rem; }
        .card-detail.open { display: block; }
        .detail-table { width: 100%; border-collapse: collapse; font-size: .81rem; }
        .detail-table th { color: var(--text-muted); font-weight: 700; text-align: left; padding: .28rem .4rem; border-bottom: 1px solid #f3f4f6; font-size: .73rem; text-transform: uppercase; }
        .detail-table td { padding: .35rem .4rem; color: var(--text); border-bottom: 1px solid #fafafa; }
        .detail-empty { color: #bbb; font-size: .82rem; text-align: center; padding: .75rem 0; }

        /* Action buttons */
        .section-title { font-size: .8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: .8px; margin-bottom: .75rem; margin-top: 1.5rem; }
        .action-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: .75rem; }
        .action-btn {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: .95rem 1.2rem;
            display: flex;
            align-items: center;
            gap: .8rem;
            font-size: .9rem;
            color: var(--text);
            text-decoration: none;
            font-weight: 600;
            transition: border-color .15s, box-shadow .15s, transform .15s;
            box-shadow: var(--shadow-sm);
        }
        .action-btn .ab-icon { font-size: 1.6rem; }
        .action-btn:hover { border-color: var(--red); box-shadow: 0 0 0 3px rgba(255,23,23,.1); transform: translateY(-1px); }
        .action-btn .ab-meta { font-size: .76rem; font-weight: 400; color: var(--text-muted); }

        /* Dash header banner */
        .dash-header {
            background: linear-gradient(130deg, #89cc31 0%, #89cc31 60%, #89cc31 100%);
            color: #fff;
            border-radius: 14px;
            padding: 1.75rem 2rem;
            margin-bottom: 1.75rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            box-shadow: 0 4px 20px rgba(255,23,23,.25);
        }
        .dash-header h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: .2rem; }
        .dash-header p  { opacity: .82; font-size: .9rem; }
        .dash-badge {
            background: rgba(255,255,255,.15);
            border: 1px solid rgba(255,255,255,.35);
            border-radius: 20px;
            font-size: .78rem;
            padding: .3rem 1rem;
            font-weight: 700;
            white-space: nowrap;
            backdrop-filter: blur(4px);
        }

        /* Status badges */
        .badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: .75rem; font-weight: 700; }
        .badge-pendiente  { background: #fff8e1; color: #b45309; border: 1px solid #fde68a; }
        .badge-completada { background: var(--green-light); color: #3a6b00; border: 1px solid #c3e88d; }
        .badge-cancelada  { background: var(--red-light); color: #990000; border: 1px solid #ffb3b3; }
    </style>
    @yield('styles')
</head>
<body>
    <nav>
        <span class="nav-brand">
            <span class="logo-circle">❤</span>
            FCD — Citas
        </span>
        @auth
        <div class="nav-right">
            <div class="nav-user">
                <span>{{ Auth::user()->name }}</span>
                <span class="role-badge">{{ Auth::user()->role }}</span>
            </div>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="btn-logout">Salir</button>
            </form>
        </div>
        @endauth
    </nav>

    <main>
        @if (session('success'))
            <div class="alert alert-success">✔ {{ session('success') }}</div>
        @endif
        @if (session('error'))
            <div class="alert alert-error">✖ {{ session('error') }}</div>
        @endif

        @yield('content')
    </main>

    @yield('scripts')
</body>
</html>
