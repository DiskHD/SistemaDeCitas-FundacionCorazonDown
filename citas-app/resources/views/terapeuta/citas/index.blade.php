<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis Citas - Terapeuta</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #1a5276; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #aed6f1; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 1000px; margin: 30px auto; padding: 0 20px; }
        .toolbar h2 { font-size: 1.4rem; color: #1a5276; margin-bottom: 20px; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 10px 16px; border-radius: 5px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        th { background: #1a5276; color: #fff; padding: 12px 14px; text-align: left; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
        td { padding: 12px 14px; border-bottom: 1px solid #eee; font-size: 0.9rem; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #f9fafb; }
        .badge { display: inline-block; padding: 3px 9px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
        .badge-pendiente { background: #fff3cd; color: #856404; }
        .badge-completada { background: #d1e7dd; color: #0f5132; }
        .badge-cancelada { background: #f8d7da; color: #842029; }
        .btn { display: inline-block; padding: 5px 12px; border-radius: 5px; font-size: 0.84rem; cursor: pointer; border: none; font-weight: 600; color: #fff; }
        .btn-success { background: #1a7a4a; }
        .btn-success:hover { background: #145e38; }
        .logout-btn { background: transparent; border: 1px solid #aed6f1; color: #aed6f1; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
    </style>
</head>
<body>
<div class="header">
    <h1>🩺 Sistema de Citas</h1>
    <nav>
        <a href="{{ route('terapeuta.dashboard') }}">Dashboard</a>
        <a href="{{ route('terapeuta.citas.index') }}">Mis Citas</a>
        <form action="{{ route('logout') }}" method="POST" style="display:inline">
            @csrf
            <button type="submit" class="logout-btn">Cerrar sesión</button>
        </form>
    </nav>
</div>

<div class="container">
    <div class="toolbar">
        <h2>Mis Citas</h2>
    </div>

    @if(session('success'))
        <div class="alert-success">{{ session('success') }}</div>
    @endif

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Paciente</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            @forelse($appointments as $cita)
            <tr>
                <td>{{ $cita->id }}</td>
                <td>{{ $cita->patient_name }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->date)->format('d/m/Y') }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->time)->format('H:i') }}</td>
                <td style="max-width:200px;">{{ $cita->description ?? '—' }}</td>
                <td>
                    <span class="badge badge-{{ $cita->status }}">{{ ucfirst($cita->status) }}</span>
                </td>
                <td>
                    @if($cita->status === 'pendiente')
                        <form action="{{ route('terapeuta.citas.complete', $cita) }}" method="POST"
                              onsubmit="return confirm('¿Marcar como completada?')">
                            @csrf @method('PATCH')
                            <button type="submit" class="btn btn-success">✔ Completada</button>
                        </form>
                    @else
                        <span style="color:#aaa; font-size:0.85rem;">—</span>
                    @endif
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="7" style="text-align:center; color:#aaa; padding:30px;">No tienes citas asignadas.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>
</body>
</html>
