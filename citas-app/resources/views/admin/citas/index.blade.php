<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Citas — Administrador | FCD</title>
    <style>
        :root {
            --red: #ff1717; --red-dark: #cc0000; --red-light: #fff0f0;
            --green: #89cc31; --green-dark: #6aaa1e; --green-light: #f1fce6;
            --bg: #f5f5f5; --surface: #fff; --border: #e0e0e0;
            --text: #333; --muted: #6b7280;
            --radius: 10px; --shadow: 0 2px 8px rgba(0,0,0,.08);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: var(--text); }

        /* Navbar */
        .navbar { background: var(--red); color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; height: 56px; box-shadow: 0 2px 8px rgba(255,23,23,.3); position: sticky; top: 0; z-index: 100; }
        .navbar-brand { font-weight: 800; font-size: 1rem; display: flex; align-items: center; gap: .5rem; }
        .navbar-brand .dot { width: 28px; height: 28px; background: rgba(255,255,255,.2); border: 2px solid rgba(255,255,255,.45); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .9rem; }
        .navbar nav { display: flex; align-items: center; gap: 1rem; }
        .navbar nav a { color: rgba(255,255,255,.85); text-decoration: none; font-size: .88rem; font-weight: 500; padding: .3rem .6rem; border-radius: 5px; transition: background .15s; }
        .navbar nav a:hover { background: rgba(255,255,255,.15); color: #fff; }
        .btn-logout { background: rgba(0,0,0,.15); border: 1px solid rgba(255,255,255,.3); color: #fff; padding: .32rem .9rem; border-radius: 6px; cursor: pointer; font-size: .83rem; font-weight: 600; }
        .btn-logout:hover { background: rgba(0,0,0,.28); }

        /* Layout */
        .container { max-width: 1260px; margin: 2rem auto; padding: 0 1.25rem; }

        /* Page title row */
        .page-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
        .page-title h2 { font-size: 1.25rem; font-weight: 800; color: var(--text); }
        .page-title .subtitle { font-size: .83rem; color: var(--muted); margin-top: .1rem; }

        /* Alerts */
        .alert { padding: .8rem 1.1rem; border-radius: var(--radius); margin-bottom: 1rem; font-size: .88rem; display: flex; align-items: center; gap: .5rem; }
        .alert-success { background: var(--green-light); border: 1px solid #c3e88d; color: #3a6b00; }

        /* Filter bar */
        .filter-bar { background: var(--surface); border-radius: var(--radius); padding: 1rem 1.25rem; box-shadow: var(--shadow); margin-bottom: 1.25rem; display: flex; flex-wrap: wrap; gap: .85rem; align-items: flex-end; }
        .fg { display: flex; flex-direction: column; gap: .3rem; flex: 1; min-width: 150px; }
        .fg label { font-size: .73rem; font-weight: 800; color: var(--muted); text-transform: uppercase; letter-spacing: .6px; }
        .fg input, .fg select { padding: .5rem .75rem; border: 1.5px solid var(--border); border-radius: 7px; font-size: .88rem; background: #fafafa; transition: border-color .15s; }
        .fg input:focus, .fg select:focus { outline: none; border-color: var(--red); background: #fff; box-shadow: 0 0 0 3px rgba(255,23,23,.08); }
        .filter-actions { display: flex; gap: .6rem; padding-bottom: 1px; }

        /* Buttons */
        .btn { display: inline-flex; align-items: center; gap: .4rem; padding: .5rem 1.1rem; border-radius: 7px; font-size: .85rem; cursor: pointer; border: none; font-weight: 700; text-decoration: none; transition: opacity .15s, transform .1s; }
        .btn:hover { opacity: .88; transform: translateY(-1px); }
        .btn:active { transform: translateY(0); }
        .btn-red     { background: var(--red); color: #fff; }
        .btn-green   { background: var(--green); color: #fff; }
        .btn-ghost   { background: #eee; color: var(--text); }
        .btn-outline { background: #fff; border: 1.5px solid var(--border); color: var(--text); }
        .btn-sm { padding: .32rem .75rem; font-size: .78rem; border-radius: 6px; }
        .btn-danger-sm { background: var(--red-light); color: var(--red-dark); border: 1px solid #ffb3b3; }
        .btn-danger-sm:hover { background: var(--red); color: #fff; }
        .btn-warn-sm  { background: #fff8e1; color: #b45309; border: 1px solid #fde68a; }
        .btn-warn-sm:hover { background: #f59e0b; color: #fff; }
        .btn-ok-sm    { background: var(--green-light); color: #3a6b00; border: 1px solid #c3e88d; }
        .btn-ok-sm:hover { background: var(--green); color: #fff; }
        .btn-muted-sm { background: #f3f4f6; color: var(--muted); border: 1px solid #e0e0e0; }
        .btn-muted-sm:hover { background: #e5e7eb; }

        /* Results info */
        .results-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: .75rem; font-size: .82rem; color: var(--muted); }

        /* Table */
        .table-wrap { background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
        table { width: 100%; border-collapse: collapse; }
        thead tr { background: var(--red); }
        th { color: #fff; padding: .75rem 1rem; text-align: left; font-size: .73rem; text-transform: uppercase; letter-spacing: .7px; font-weight: 700; }
        td { padding: .7rem 1rem; border-bottom: 1px solid #f3f4f6; font-size: .87rem; vertical-align: middle; }
        tbody tr:last-child td { border-bottom: none; }
        tbody tr:hover td { background: #fff8f8; }

        /* Status badges */
        .badge { display: inline-block; padding: .22rem .7rem; border-radius: 12px; font-size: .73rem; font-weight: 700; border: 1px solid transparent; }
        .badge-pendiente  { background: #fff8e1; color: #b45309; border-color: #fde68a; }
        .badge-completada { background: var(--green-light); color: #3a6b00; border-color: #c3e88d; }
        .badge-cancelada  { background: var(--red-light); color: var(--red-dark); border-color: #ffb3b3; }

        /* Actions cell */
        .actions-cell { display: flex; flex-wrap: wrap; gap: .35rem; }
        .actions-cell form { display: contents; }

        /* Empty state */
        .empty { text-align: center; padding: 3.5rem 1rem; color: #bbb; }
        .empty .ico { font-size: 3rem; margin-bottom: .75rem; }
        .empty p { font-size: .92rem; }

        /* Pagination */
        .pagination { display: flex; justify-content: center; gap: .4rem; margin-top: 1.25rem; flex-wrap: wrap; }
        .pagination a, .pagination span { padding: .38rem .8rem; border-radius: 6px; text-decoration: none; font-size: .84rem; border: 1.5px solid var(--border); font-weight: 600; }
        .pagination a { background: var(--surface); color: var(--text); }
        .pagination a:hover { border-color: var(--red); color: var(--red); background: var(--red-light); }
        .pagination .pg-active { background: var(--red); color: #fff; border-color: var(--red); }
        .pagination .pg-disabled { color: #ccc; background: #fafafa; cursor: default; }
    </style>
</head>
<body>
<header class="navbar">
    <div class="navbar-brand">
        <span class="dot">❤</span> FCD — Administrador
    </div>
    <nav>
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
        <a href="{{ route('admin.citas.index') }}">Citas</a>
        <form action="{{ route('logout') }}" method="POST">
            @csrf <button type="submit" class="btn-logout">Salir</button>
        </form>
    </nav>
</header>

<div class="container">
    <div class="page-title">
        <div>
            <h2>📅 Gestión de Citas</h2>
            <div class="subtitle">Vista completa · Administrador</div>
        </div>
    </div>

    @if(session('success'))
        <div class="alert alert-success">✔ {{ session('success') }}</div>
    @endif

    {{-- Filtros --}}
    <form method="GET" action="{{ route('admin.citas.index') }}">
        <div class="filter-bar">
            <div class="fg">
                <label>Paciente</label>
                <input type="text" name="search" placeholder="Buscar nombre…" value="{{ request('search') }}">
            </div>
            <div class="fg" style="max-width:175px">
                <label>Fecha</label>
                <input type="date" name="date" value="{{ request('date') }}">
            </div>
            <div class="fg" style="max-width:155px">
                <label>Estado</label>
                <select name="status">
                    <option value="">Todos</option>
                    <option value="pendiente"  {{ request('status') === 'pendiente'  ? 'selected' : '' }}>Pendiente</option>
                    <option value="completada" {{ request('status') === 'completada' ? 'selected' : '' }}>Completada</option>
                    <option value="cancelada"  {{ request('status') === 'cancelada'  ? 'selected' : '' }}>Cancelada</option>
                </select>
            </div>
            <div class="filter-actions">
                <button type="submit" class="btn btn-red">🔍 Buscar</button>
                <a href="{{ route('admin.citas.index') }}" class="btn btn-ghost">✕ Limpiar</a>
            </div>
        </div>
    </form>

    <div class="results-bar">
        <span>
            Mostrando <strong>{{ $appointments->firstItem() ?? 0 }}–{{ $appointments->lastItem() ?? 0 }}</strong>
            de <strong>{{ $appointments->total() }}</strong> cita(s)
            @if(request('search') || request('date') || request('status'))
                · <em>con filtros</em>
            @endif
        </span>
    </div>

    @if($appointments->isEmpty())
        <div class="empty">
            <div class="ico">🔍</div>
            <p>No hay citas con los filtros aplicados.</p>
            <a href="{{ route('admin.citas.index') }}" class="btn btn-ghost" style="margin-top:.9rem">Ver todas</a>
        </div>
    @else
    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>#</th><th>Paciente</th><th>Terapeuta</th><th>Creado por</th>
                    <th>Fecha</th><th>Hora</th><th>Estado</th><th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                @foreach($appointments as $c)
                <tr>
                    <td style="color:var(--muted);font-size:.78rem">{{ $c->id }}</td>
                    <td><strong>{{ $c->patient_name }}</strong></td>
                    <td>{{ $c->therapist->name ?? '—' }}</td>
                    <td>{{ $c->creator->name ?? '—' }}</td>
                    <td>{{ \Carbon\Carbon::parse($c->date)->format('d/m/Y') }}</td>
                    <td>{{ \Carbon\Carbon::parse($c->time)->format('H:i') }}</td>
                    <td><span class="badge badge-{{ $c->status }}">{{ ucfirst($c->status) }}</span></td>
                    <td>
                        <div class="actions-cell">
                            <a href="{{ route('admin.citas.edit', $c) }}" class="btn btn-sm btn-warn-sm">✏ Editar</a>
                            @if($c->status === 'pendiente')
                                <form action="{{ route('admin.citas.complete', $c) }}" method="POST" onsubmit="return confirm('¿Marcar como completada?')">
                                    @csrf @method('PATCH')
                                    <button class="btn btn-sm btn-ok-sm">✔ Completar</button>
                                </form>
                                <form action="{{ route('admin.citas.cancel', $c) }}" method="POST" onsubmit="return confirm('¿Cancelar?')">
                                    @csrf @method('PATCH')
                                    <button class="btn btn-sm btn-muted-sm">✖ Cancelar</button>
                                </form>
                            @endif
                            <form action="{{ route('admin.citas.destroy', $c) }}" method="POST" onsubmit="return confirm('¿Eliminar permanentemente?')">
                                @csrf @method('DELETE')
                                <button class="btn btn-sm btn-danger-sm">🗑</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    @if($appointments->hasPages())
    <div class="pagination">
        @if($appointments->onFirstPage())
            <span class="pg-disabled">‹</span>
        @else
            <a href="{{ $appointments->previousPageUrl() }}">‹</a>
        @endif
        @foreach($appointments->getUrlRange(1, $appointments->lastPage()) as $page => $url)
            @if($page == $appointments->currentPage())
                <span class="pg-active">{{ $page }}</span>
            @else
                <a href="{{ $url }}">{{ $page }}</a>
            @endif
        @endforeach
        @if($appointments->hasMorePages())
            <a href="{{ $appointments->nextPageUrl() }}">›</a>
        @else
            <span class="pg-disabled">›</span>
        @endif
    </div>
    @endif
    @endif
</div>
</body>
</html>
