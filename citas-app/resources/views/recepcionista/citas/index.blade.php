<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Citas - Recepcionista</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #2c6e49; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #cce8d8; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 1100px; margin: 30px auto; padding: 0 20px; }
        .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .toolbar h2 { font-size: 1.4rem; color: #2c6e49; }
        .btn { display: inline-block; padding: 8px 16px; border-radius: 5px; text-decoration: none; font-size: 0.9rem; cursor: pointer; border: none; }
        .btn-primary { background: #2c6e49; color: #fff; }
        .btn-primary:hover { background: #1f4f34; }
        .btn-warning { background: #e9a820; color: #fff; }
        .btn-warning:hover { background: #c78a10; }
        .btn-danger { background: #c0392b; color: #fff; }
        .btn-danger:hover { background: #962d22; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 10px 16px; border-radius: 5px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        th { background: #2c6e49; color: #fff; padding: 12px 14px; text-align: left; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
        td { padding: 12px 14px; border-bottom: 1px solid #eee; font-size: 0.9rem; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #f9fafb; }
        .badge { display: inline-block; padding: 3px 9px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
        .badge-pendiente { background: #fff3cd; color: #856404; }
        .badge-completada { background: #d1e7dd; color: #0f5132; }
        .badge-cancelada { background: #f8d7da; color: #842029; }
        .actions form { display: inline; }
        .actions .btn { padding: 5px 11px; font-size: 0.82rem; }
        .logout-btn { background: transparent; border: 1px solid #cce8d8; color: #cce8d8; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
        .logout-btn:hover { background: rgba(255,255,255,0.1); }
    </style>
</head>
<body>
<div class="header">
    <h1>📋 Sistema de Citas</h1>
    <nav>
        <a href="{{ route('recepcionista.dashboard') }}">Dashboard</a>
        <a href="{{ route('recepcionista.citas.index') }}">Citas</a>
        <form action="{{ route('logout') }}" method="POST" style="display:inline">
            @csrf
            <button type="submit" class="logout-btn">Cerrar sesión</button>
        </form>
    </nav>
</div>

<div class="container">
    <div class="toolbar">
        <h2>Gestión de Citas</h2>
        <a href="{{ route('recepcionista.citas.create') }}" class="btn btn-primary">+ Nueva Cita</a>
    </div>

    @if(session('success'))
        <div class="alert-success">{{ session('success') }}</div>
    @endif

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Paciente</th>
                <th>Terapeuta</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @forelse($appointments as $cita)
            <tr>
                <td>{{ $cita->id }}</td>
                <td>{{ $cita->patient_name }}</td>
                <td>{{ $cita->therapist->name ?? '—' }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->date)->format('d/m/Y') }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->time)->format('H:i') }}</td>
                <td>
                    <span class="badge badge-{{ $cita->status }}">{{ ucfirst($cita->status) }}</span>
                </td>
                <td class="actions">
                    @if($cita->status === 'pendiente')
                        <a href="{{ route('recepcionista.citas.edit', $cita) }}" class="btn btn-warning">Editar</a>
                        <form action="{{ route('recepcionista.citas.cancel', $cita) }}" method="POST" onsubmit="return confirm('¿Cancelar esta cita?')">
                            @csrf @method('PATCH')
                            <button type="submit" class="btn btn-danger">Cancelar</button>
                        </form>
                    @else
                        <span style="color:#aaa; font-size:0.85rem;">Sin acciones</span>
                    @endif
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="7" style="text-align:center; color:#aaa; padding:30px;">No hay citas registradas.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>
</body>
</html>
