<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Cita - Administrador</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #6c2c8a; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #e8d4f5; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 700px; margin: 40px auto; padding: 0 20px; }
        .card { background: #fff; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); padding: 32px; margin-bottom: 20px; }
        .card h2 { font-size: 1.3rem; color: #6c2c8a; margin-bottom: 24px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .form-group { margin-bottom: 18px; }
        label { display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 5px; color: #555; }
        input, select, textarea { width: 100%; padding: 9px 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 0.93rem; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #6c2c8a; box-shadow: 0 0 0 2px rgba(108,44,138,0.12); }
        textarea { resize: vertical; min-height: 90px; }
        .error { color: #c0392b; font-size: 0.82rem; margin-top: 4px; }
        .btn-row { display: flex; gap: 12px; margin-top: 24px; }
        .btn { display: inline-block; padding: 9px 20px; border-radius: 5px; text-decoration: none; font-size: 0.93rem; cursor: pointer; border: none; font-weight: 600; }
        .btn-primary { background: #6c2c8a; color: #fff; }
        .btn-primary:hover { background: #521f6a; }
        .btn-secondary { background: #eee; color: #555; }
        .btn-secondary:hover { background: #ddd; }
        .btn-info { background: #3498db; color: #fff; }
        .btn-info:hover { background: #2980b9; }
        .btn-sm { padding: 6px 14px; font-size: 0.85rem; }
        .logout-btn { background: transparent; border: 1px solid #e8d4f5; color: #e8d4f5; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
        .patient-info { background: #f3e8fa; border: 1px solid #dfc5ef; border-radius: 6px; padding: 16px; }
        .patient-info h3 { color: #6c2c8a; font-size: 1.1rem; margin-bottom: 12px; }
        .patient-info p { color: #555; font-size: 0.88rem; margin: 4px 0; }
        .patient-info strong { color: #333; }
        .section-title { font-size: 1rem; font-weight: 600; color: #6c2c8a; margin: 24px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; }
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
    <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
            <h2 style="margin: 0; border: none; padding: 0;">Información del Paciente</h2>
            <a href="{{ route('patients.edit', $appointment->patient) }}" class="btn btn-info btn-sm">
                Editar paciente
            </a>
        </div>

        <div class="patient-info">
            <h3>{{ $appointment->patient->nombre_paciente }}</h3>
            <p><strong>Edad:</strong> {{ $appointment->patient->edad ?? 'No especificado' }} años</p>
            <p><strong>Tutor:</strong> {{ $appointment->patient->nombre_tutor ?? 'No especificado' }}</p>
            <p><strong>Teléfono del tutor:</strong> {{ $appointment->patient->telefono_tutor ?? 'No especificado' }}</p>
            <p><strong>Email del tutor:</strong> {{ $appointment->patient->email_tutor ?? 'No especificado' }}</p>
            <p><strong>Domicilio:</strong> {{ $appointment->patient->domicilio ?? 'No especificado' }}</p>
            @if($appointment->patient->nota_paciente)
                <p><strong>Nota:</strong> {{ $appointment->patient->nota_paciente }}</p>
            @endif
        </div>
    </div>

    <div class="card">
        <h2>Editar Cita #{{ $appointment->id }}</h2>

        <form action="{{ route('admin.citas.update', $appointment) }}" method="POST">
            @csrf @method('PUT')

            <input type="hidden" name="patient_id" value="{{ $appointment->patient_id }}">

            <div class="form-group">
                <label for="therapist_id">Terapeuta *</label>
                <select id="therapist_id" name="therapist_id">
                    <option value="">-- Seleccionar terapeuta --</option>
                    @foreach($therapists as $t)
                        <option value="{{ $t->id }}"
                            {{ old('therapist_id', $appointment->therapist_id) == $t->id ? 'selected' : '' }}>
                            {{ $t->name }}{{ $t->tipoTerapeutaLabel() ? ' (' . $t->tipoTerapeutaLabel() . ')' : '' }}
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

            <div class="form-group">
                <label for="diagnosis">Diagnóstico</label>
                <textarea id="diagnosis" name="diagnosis">{{ old('diagnosis', $appointment->diagnosis) }}</textarea>
                @error('diagnosis') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="price">Precio *</label>
                <input type="number" id="price" name="price"
                       value="{{ old('price', $appointment->price ?? 0) }}" min="0" step="0.01">
                @error('price') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="form-group">
                <label for="payment_status">Estado de pago *</label>
                <select id="payment_status" name="payment_status">
                    <option value="no_pagado" {{ old('payment_status', $appointment->payment_status ?? 'no_pagado') === 'no_pagado' ? 'selected' : '' }}>Pendiente de pago</option>
                    <option value="pagado" {{ old('payment_status', $appointment->payment_status ?? 'no_pagado') === 'pagado' ? 'selected' : '' }}>Pagado</option>
                </select>
                @error('payment_status') <span class="error">{{ $message }}</span> @enderror
            </div>

            <div class="btn-row">
                <button type="submit" class="btn btn-primary">Actualizar Cita</button>
                <a href="{{ route('admin.citas.index') }}" class="btn btn-secondary">Cancelar</a>
            </div>
        </form>
    </div>
</div>
</body>
</html>
