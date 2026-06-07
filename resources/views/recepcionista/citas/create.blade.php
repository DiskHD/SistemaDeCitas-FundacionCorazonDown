<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Cita - Recepcionista</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; background: #f4f6f8; color: #333; }
        .header { background: #2c6e49; color: #fff; padding: 14px 24px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 1.2rem; }
        .header nav a { color: #cce8d8; text-decoration: none; margin-left: 16px; font-size: 0.9rem; }
        .header nav a:hover { color: #fff; }
        .container { max-width: 900px; margin: 40px auto; padding: 0 20px; }
        .card { background: #fff; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); padding: 32px; }
        .card h2 { font-size: 1.3rem; color: #2c6e49; margin-bottom: 24px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .form-group { margin-bottom: 18px; }
        label { display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 5px; color: #555; }
        input, select, textarea { width: 100%; padding: 9px 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 0.93rem; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #2c6e49; box-shadow: 0 0 0 2px rgba(44,110,73,0.12); }
        textarea { resize: vertical; min-height: 90px; }
        .error { color: #c0392b; font-size: 0.82rem; margin-top: 4px; }
        .btn-row { display: flex; gap: 12px; margin-top: 24px; }
        .btn { display: inline-block; padding: 9px 20px; border-radius: 5px; text-decoration: none; font-size: 0.93rem; cursor: pointer; border: none; font-weight: 600; transition: background 0.2s; }
        .btn-primary { background: #2c6e49; color: #fff; }
        .btn-primary:hover { background: #1f4f34; }
        .btn-secondary { background: #eee; color: #555; }
        .btn-secondary:hover { background: #ddd; }
        .btn-small { padding: 6px 12px; font-size: 0.82rem; }
        .btn-info { background: #3498db; color: #fff; }
        .btn-info:hover { background: #2980b9; }
        .btn-success { background: #27ae60; color: #fff; }
        .btn-success:hover { background: #229954; }
        .logout-btn { background: transparent; border: 1px solid #cce8d8; color: #cce8d8; padding: 6px 14px; border-radius: 5px; cursor: pointer; font-size: 0.88rem; }
        .patient-box { border: 1px solid #d8e6dc; border-radius: 8px; background: #fbfdfb; padding: 16px; margin-bottom: 22px; }
        .mode-row { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
        .mode-row label { display: inline-flex; align-items: center; gap: 8px; border: 1px solid #d7ded9; border-radius: 6px; padding: 9px 12px; cursor: pointer; background: #fff; }
        .mode-row label:has(input:checked) { background: #e8f4ec; border-color: #2c6e49; }
        .mode-row input { width: auto; }
        .section { display: none; }
        .section.active { display: block; }
        .filters-row { display: flex; gap: 12px; margin-bottom: 16px; align-items: end; }
        .filters-row .form-group { flex: 1; margin-bottom: 0; }
        .patient-list { border: 1px solid #e0e0e0; border-radius: 6px; max-height: 400px; overflow-y: auto; background: #fff; }
        .patient-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid #f0f0f0; transition: background 0.15s; }
        .patient-item:last-child { border-bottom: none; }
        .patient-item:hover { background: #f8faf9; }
        .patient-info { flex: 1; }
        .patient-info strong { display: block; color: #2c3e50; font-size: 0.95rem; margin-bottom: 4px; }
        .patient-info span { display: block; color: #7f8c8d; font-size: 0.82rem; }
        .patient-actions { display: flex; gap: 8px; }
        .selected-patient-card { padding: 16px; background: #eaf6ee; border: 1px solid #c9e5d2; border-radius: 6px; margin-bottom: 20px; }
        .selected-patient-info h3 { color: #2c6e49; font-size: 1.1rem; margin-bottom: 12px; }
        .selected-patient-info p { color: #555; font-size: 0.88rem; margin: 6px 0; }
        .selected-patient-info p strong { color: #333; }
        .empty-state { text-align: center; padding: 40px 20px; color: #95a5a6; }
        .section-title { font-size: 1rem; font-weight: 600; color: #2c6e49; margin: 24px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; }
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
        <h2>Nueva Cita</h2>

        <form action="{{ route('recepcionista.citas.store') }}" method="POST" id="appointmentForm">
            @csrf

            <div class="patient-box">
                <div class="mode-row">
                    <label>
                        <input type="radio" name="patient_mode" value="existing" {{ old('patient_mode', 'existing') === 'existing' ? 'checked' : '' }}>
                        Seleccionar paciente existente
                    </label>
                    <label>
                        <input type="radio" name="patient_mode" value="new" {{ old('patient_mode') === 'new' ? 'checked' : '' }}>
                        + Nuevo paciente
                    </label>
                </div>
                @error('patient_mode') <span class="error">{{ $message }}</span> @enderror

                <!-- ========== SECCIÓN: PACIENTE EXISTENTE ========== -->
                <div id="existingPatientSection" class="section">
                    <input type="hidden" id="patient_id" name="patient_id" value="{{ old('patient_id') }}">

                    <!-- Tarjeta de paciente seleccionado -->
                    <div id="selectedPatientCard" class="selected-patient-card" style="display: none;">
                        <div class="selected-patient-info">
                            <h3 id="selectedPatientName"></h3>
                            <p><strong>Edad:</strong> <span id="selectedPatientAge"></span></p>
                            <p><strong>Tutor:</strong> <span id="selectedPatientGuardian"></span></p>
                            <p><strong>Teléfono del tutor:</strong> <span id="selectedPatientPhone"></span></p>
                            <p><strong>Gmail del tutor:</strong> <span id="selectedPatientEmail"></span></p>
                            <p><strong>Domicilio:</strong> <span id="selectedPatientAddress"></span></p>
                            <p><strong>Nota:</strong> <span id="selectedPatientNotes"></span></p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-small" onclick="clearPatientSelection()">Cambiar paciente</button>
                    </div>

                    <!-- Lista de búsqueda y selección -->
                    <div id="patientSearchSection">
                        <div class="filters-row">
                            <div class="form-group">
                                <label for="patient_search">Buscar por nombre</label>
                                <input type="text" id="patient_search" autocomplete="off" placeholder="Escribe el nombre del paciente...">
                            </div>
                            <div class="form-group">
                                <label for="tipo_terapeuta_filter">Filtrar por tipo de terapeuta</label>
                                <select id="tipo_terapeuta_filter">
                                    <option value="">Todos los tipos</option>
                                    <option value="psicologia">Psicología</option>
                                    <option value="terapia_fisica">Terapia Física</option>
                                    <option value="terapia_ocupacional">Terapia Ocupacional</option>
                                    <option value="lectoescritura">Lectoescritura</option>
                                    <option value="lenguaje">Lenguaje</option>
                                </select>
                            </div>
                        </div>
                        @error('patient_id') <span class="error">{{ $message }}</span> @enderror

                        <div class="patient-list" id="patientList">
                            <div class="empty-state">
                                <p>Usa los filtros para buscar pacientes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ========== SECCIÓN: NUEVO PACIENTE ========== -->
                <div id="newPatientSection" class="section">
                    <div class="section-title">Datos del paciente</div>

                    <div class="form-group">
                        <label for="nombre_paciente">Nombre del paciente *</label>
                        <input type="text" id="nombre_paciente" name="nombre_paciente" value="{{ old('nombre_paciente') }}">
                        @error('nombre_paciente') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="edad">Edad *</label>
                        <input type="number" id="edad" name="edad" value="{{ old('edad') }}" min="0" max="120">
                        @error('edad') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="nombre_tutor">Nombre del tutor *</label>
                        <input type="text" id="nombre_tutor" name="nombre_tutor" value="{{ old('nombre_tutor') }}">
                        @error('nombre_tutor') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="telefono_tutor">Teléfono del tutor *</label>
                        <input type="text" id="telefono_tutor" name="telefono_tutor" value="{{ old('telefono_tutor') }}">
                        @error('telefono_tutor') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="email_tutor">Gmail del tutor</label>
                        <input type="email" id="email_tutor" name="email_tutor" value="{{ old('email_tutor') }}">
                        @error('email_tutor') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="domicilio">Domicilio *</label>
                        <input type="text" id="domicilio" name="domicilio" value="{{ old('domicilio') }}">
                        @error('domicilio') <span class="error">{{ $message }}</span> @enderror
                    </div>

                    <div class="form-group">
                        <label for="nota_paciente">Nota del paciente</label>
                        <textarea id="nota_paciente" name="nota_paciente">{{ old('nota_paciente') }}</textarea>
                        @error('nota_paciente') <span class="error">{{ $message }}</span> @enderror
                    </div>
                </div>
            </div>

            <!-- ========== DATOS DE LA CITA (SIEMPRE VISIBLES) ========== -->
            <div id="appointmentFields">
                <div class="section-title">Datos de la cita</div>

                <div class="form-group">
                    <label for="therapist_id">Terapeuta *</label>
                    <select id="therapist_id" name="therapist_id">
                        <option value="">-- Seleccionar terapeuta --</option>
                        @foreach($therapists as $t)
                            <option value="{{ $t->id }}" {{ old('therapist_id') == $t->id ? 'selected' : '' }}>
                                {{ $t->name }}{{ $t->tipoTerapeutaLabel() ? ' (' . $t->tipoTerapeutaLabel() . ')' : '' }}
                            </option>
                        @endforeach
                    </select>
                    @error('therapist_id') <span class="error">{{ $message }}</span> @enderror
                </div>

                <div class="form-group">
                    <label for="date">Fecha *</label>
                    <input type="date" id="date" name="date" value="{{ old('date') }}" min="{{ date('Y-m-d') }}">
                    @error('date') <span class="error">{{ $message }}</span> @enderror
                </div>

                <div class="form-group">
                    <label for="time">Hora *</label>
                    <input type="time" id="time" name="time" value="{{ old('time') }}">
                    @error('time') <span class="error">{{ $message }}</span> @enderror
                </div>

                <div class="form-group">
                    <label for="description">Descripción / Notas</label>
                    <textarea id="description" name="description">{{ old('description') }}</textarea>
                    @error('description') <span class="error">{{ $message }}</span> @enderror
                </div>

                <div class="form-group">
                    <label for="price">Precio *</label>
                    <input type="number" id="price" name="price" value="{{ old('price', 0) }}" min="0" step="0.01">
                    @error('price') <span class="error">{{ $message }}</span> @enderror
                </div>

                <div class="form-group">
                    <label for="payment_status">Estado de pago *</label>
                    <select id="payment_status" name="payment_status">
                        <option value="no_pagado" {{ old('payment_status', 'no_pagado') === 'no_pagado' ? 'selected' : '' }}>Pendiente de pago</option>
                        <option value="pagado" {{ old('payment_status') === 'pagado' ? 'selected' : '' }}>Pagado</option>
                    </select>
                    @error('payment_status') <span class="error">{{ $message }}</span> @enderror
                </div>
            </div>

            <div class="btn-row">
                <button type="submit" class="btn btn-primary">Crear cita</button>
                <a href="{{ route('recepcionista.citas.index') }}" class="btn btn-secondary">Cancelar</a>
            </div>
        </form>
    </div>
</div>

<script>
    const patientModeInputs = document.querySelectorAll('input[name="patient_mode"]');
    const existingPatientSection = document.getElementById('existingPatientSection');
    const newPatientSection = document.getElementById('newPatientSection');
    const patientSearchInput = document.getElementById('patient_search');
    const tipoTerapeutaFilter = document.getElementById('tipo_terapeuta_filter');
    const patientList = document.getElementById('patientList');
    const patientIdInput = document.getElementById('patient_id');
    const selectedPatientCard = document.getElementById('selectedPatientCard');
    const patientSearchSection = document.getElementById('patientSearchSection');

    let searchTimeout = null;
    let selectedPatientData = null;

    // Alternar entre modo existente y nuevo paciente
    function updatePatientMode() {
        const selectedMode = document.querySelector('input[name="patient_mode"]:checked');
        const mode = selectedMode ? selectedMode.value : 'existing';

        if (mode === 'existing') {
            existingPatientSection.classList.add('active');
            newPatientSection.classList.remove('active');
            loadPatients();
        } else {
            existingPatientSection.classList.remove('active');
            newPatientSection.classList.add('active');
        }
    }

    // Cargar pacientes desde el servidor
    function loadPatients() {
        const search = patientSearchInput.value.trim();
        const tipoTerapeuta = tipoTerapeutaFilter.value;

        let url = '{{ route('patients.search') }}?';
        if (search) url += 'q=' + encodeURIComponent(search) + '&';
        if (tipoTerapeuta) url += 'tipo_terapeuta=' + encodeURIComponent(tipoTerapeuta);

        fetch(url, {
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(patients => {
            renderPatientList(patients);
        })
        .catch(error => {
            console.error('Error al cargar pacientes:', error);
            patientList.innerHTML = '<div class="empty-state"><p>Error al cargar pacientes</p></div>';
        });
    }

    // Renderizar lista de pacientes
    function renderPatientList(patients) {
        if (patients.length === 0) {
            patientList.innerHTML = '<div class="empty-state"><p>No se encontraron pacientes</p></div>';
            return;
        }

        patientList.innerHTML = patients.map(patient => `
            <div class="patient-item">
                <div class="patient-info">
                    <strong>${escapeHtml(patient.name)}</strong>
                    <span>${[patient.phone, patient.email].filter(Boolean).map(escapeHtml).join(' · ') || 'Sin contacto'}</span>
                </div>
                <div class="patient-actions">
                    <button type="button" class="btn btn-success btn-small" onclick='selectPatient(${JSON.stringify(patient)})'>
                        Seleccionar
                    </button>
                    <a href="/patients/${patient.id}/edit" class="btn btn-info btn-small">
                        Editar
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Seleccionar paciente
    function selectPatient(patient) {
        selectedPatientData = patient;
        patientIdInput.value = patient.id;

        // Actualizar tarjeta de resumen
        document.getElementById('selectedPatientName').textContent = patient.name || 'Sin nombre';
        document.getElementById('selectedPatientAge').textContent = patient.patient_age || 'No especificado';
        document.getElementById('selectedPatientGuardian').textContent = patient.guardian_name || 'No especificado';
        document.getElementById('selectedPatientPhone').textContent = patient.phone || 'No especificado';
        document.getElementById('selectedPatientEmail').textContent = patient.email || 'No especificado';
        document.getElementById('selectedPatientAddress').textContent = patient.address || 'No especificado';
        document.getElementById('selectedPatientNotes').textContent = 'Sin nota';

        // Mostrar tarjeta y ocultar búsqueda
        selectedPatientCard.style.display = 'block';
        patientSearchSection.style.display = 'none';
    }

    // Limpiar selección de paciente
    function clearPatientSelection() {
        selectedPatientData = null;
        patientIdInput.value = '';
        selectedPatientCard.style.display = 'none';
        patientSearchSection.style.display = 'block';
        patientSearchInput.value = '';
        loadPatients();
    }

    // Escape HTML para prevenir XSS
    function escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.toString().replace(/[&<>"']/g, m => map[m]);
    }

    // Búsqueda en tiempo real
    patientSearchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(loadPatients, 300);
    });

    // Filtro por tipo de terapeuta
    tipoTerapeutaFilter.addEventListener('change', loadPatients);

    // Cambio de modo
    patientModeInputs.forEach(input => {
        input.addEventListener('change', updatePatientMode);
    });

    // Inicializar
    updatePatientMode();
</script>
</body>
</html>
