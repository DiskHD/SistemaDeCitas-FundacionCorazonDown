<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Citas - Administrador</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #6c2c8a; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #e8d4f5; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 1150px; margin: 30px auto; padding: 0 20px; }
        .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .toolbar h2 { font-size: 1.4rem; color: #6c2c8a; }
        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 10px 16px; border-radius: 5px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
        th { background: #6c2c8a; color: #fff; padding: 12px 14px; text-align: left; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
        td { padding: 11px 14px; border-bottom: 1px solid #eee; font-size: 0.88rem; }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #f9fafb; }
        .badge { display: inline-block; padding: 3px 9px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; }
        .badge-pendiente { background: #fff3cd; color: #856404; }
        .badge-completada { background: #d1e7dd; color: #0f5132; }
        .badge-cancelada { background: #f8d7da; color: #842029; }
        .btn { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 0.82rem; cursor: pointer; border: none; font-weight: 600; text-decoration: none; color: #fff; }
        .btn-warning { background: #e9a820; }
        .btn-warning:hover { background: #c78a10; }
        .btn-success { background: #1a7a4a; }
        .btn-success:hover { background: #145e38; }
        .btn-info { background: #0077b6; }
        .btn-info:hover { background: #005f8e; }
        .btn-danger { background: #c0392b; }
        .btn-danger:hover { background: #962d22; }
        .actions form { display: inline; }
        .actions .btn { margin-right: 3px; }
        .logout-btn { background: transparent; border: 1px solid #e8d4f5; color: #e8d4f5; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
    </style>
</head>
<body>
<div class="header">
    <h1>⚙️ Panel de Administración</h1>
    <nav>
        <a href="{{ route('admin.dashboard') }}">Dashboard</a>
        <a href="{{ route('admin.citas.index') }}">Citas</a>
        <form action="{{ route('logout') }}" method="POST" style="display:inline">
            @csrf
            <button type="submit" class="logout-btn">Cerrar sesión</button>
        </form>
    </nav>
</div>

<div class="container">
    <div class="toolbar">
        <h2>Todas las Citas</h2>
        <span style="color:#888; font-size:0.9rem;">Total: {{ $appointments->count() }}</span>
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
                <th>Creado por</th>
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
                <td>{{ $cita->creator->name ?? '—' }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->date)->format('d/m/Y') }}</td>
                <td>{{ \Carbon\Carbon::parse($cita->time)->format('H:i') }}</td>
                <td>
                    <span class="badge badge-{{ $cita->status }}">{{ ucfirst($cita->status) }}</span>
                </td>
                <td class="actions">
                    <a href="{{ route('admin.citas.edit', $cita) }}" class="btn btn-warning">Editar</a>

                    @if($cita->status === 'pendiente')
                        <form action="{{ route('admin.citas.complete', $cita) }}" method="POST" onsubmit="return confirm('¿Marcar como completada?')">
                            @csrf @method('PATCH')
                            <button class="btn btn-success">Completar</button>
                        </form>
                        <form action="{{ route('admin.citas.cancel', $cita) }}" method="POST" onsubmit="return confirm('¿Cancelar esta cita?')">
                            @csrf @method('PATCH')
                            <button class="btn btn-info">Cancelar</button>
                        </form>
                    @endif

                    <form action="{{ route('admin.citas.destroy', $cita) }}" method="POST" onsubmit="return confirm('¿Eliminar esta cita? Esta acción no se puede deshacer.')">
                        @csrf @method('DELETE')
                        <button class="btn btn-danger">Eliminar</button>
                    </form>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="8" style="text-align:center; color:#aaa; padding:30px;">No hay citas registradas.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>
</body>
</html>
