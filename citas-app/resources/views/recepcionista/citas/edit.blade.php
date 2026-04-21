<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Cita - Recepcionista</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #2c6e49; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #cce8d8; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 640px; margin: 40px auto; padding: 0 20px; }
        .card { background: #fff; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); padding: 32px; }
        .card h2 { font-size: 1.3rem; color: #2c6e49; margin-bottom: 24px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .form-group { margin-bottom: 18px; }
        label { display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 5px; color: #555; }
        input, select, textarea { width: 100%; padding: 9px 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 0.93rem; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #2c6e49; box-shadow: 0 0 0 2px rgba(44,110,73,0.12); }
        textarea { resize: vertical; min-height: 90px; }
        .error { color: #c0392b; font-size: 0.82rem; margin-top: 4px; }
        .btn-row { display: flex; gap: 12px; margin-top: 24px; }
        .btn { display: inline-block; padding: 9px 20px; border-radius: 5px; text-decoration: none; font-size: 0.93rem; cursor: pointer; border: none; font-weight: 600; }
        .btn-primary { background: #2c6e49; color: #fff; }
        .btn-primary:hover { background: #1f4f34; }
        .btn-secondary { background: #eee; color: #555; }
        .btn-secondary:hover { background: #ddd; }
        .logout-btn { background: transparent; border: 1px solid #cce8d8; color: #cce8d8; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
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
    <div class="card">
        <h2>Editar Cita #{{ $appointment->id }}</h2>

        <form action="{{ route('recepcionista.citas.update', $appointment) }}" method="POST">
            @csrf @method('PUT')

            <div class="form-group">
                <label for="patient_name">Nombre del Paciente *</label>
                <input type="text" id="patient_name" name="patient_name"
                       value="{{ old('patient_name', $appointment->patient_name) }}">
                @error('patient_name') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="therapist_id">Terapeuta *</label>
                <select id="therapist_id" name="therapist_id">
                    <option value="">-- Seleccionar terapeuta --</option>
                    @foreach($therapists as $t)
                        <option value="{{ $t->id }}"
                            {{ old('therapist_id', $appointment->therapist_id) == $t->id ? 'selected' : '' }}>
                            {{ $t->name }}
                        </option>
                    @endforeach
                </select>
                @error('therapist_id') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="date">Fecha *</label>
                <input type="date" id="date" name="date"
                       value="{{ old('date', $appointment->date) }}"
                       min="{{ date('Y-m-d') }}">
                @error('date') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="time">Hora *</label>
                <input type="time" id="time" name="time"
                       value="{{ old('time', \Carbon\Carbon::parse($appointment->time)->format('H:i')) }}">
                @error('time') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="description">Descripción / Notas</label>
                <textarea id="description" name="description">{{ old('description', $appointment->description) }}</textarea>
                @error('description') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="btn-row">
                <button type="submit" class="btn btn-primary">Actualizar Cita</button>
                <a href="{{ route('recepcionista.citas.index') }}" class="btn btn-secondary">Cancelar</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>
