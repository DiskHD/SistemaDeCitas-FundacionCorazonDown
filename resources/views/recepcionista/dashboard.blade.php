@extends('layouts.app')

@section('title', 'Panel Recepcionista')

@section('styles')
<style>
    /* Inherits all shared tokens from layouts/app.blade.php */
    /* Recepcionista: action-btn "Agendar" gets green accent */
    .action-btn.green-accent { border-color: var(--green); }
    .action-btn.green-accent:hover { box-shadow: 0 0 0 3px rgba(137,204,49,.2); border-color: var(--green-dark); }
</style>
@endsection

@section('content')
<div class="dash-header">
    <div>
        <h1>📋 Panel de Recepcionista</h1>
        <p>Bienvenido, <strong>{{ Auth::user()->name }}</strong>. Gestiona las citas y pacientes.</p>
    </div>
    <span class="dash-badge">📋 Recepcionista</span>
</div>
<p class="section-title">Acciones rápidas</p>
<div class="action-grid">
    <a href="{{ route('recepcionista.citas.create') }}" class="action-btn">
        <span class="ab-icon">➕</span>
        <div><div>Agendar nueva cita</div><small style="font-weight:400;color:#9ca3af;">Crear cita ahora</small></div>
    </a>
    <a href="{{ route('recepcionista.citas.index') }}" class="action-btn">
        <span class="ab-icon">📋</span>
        <div><div>Ver todas las citas</div><small style="font-weight:400;color:#9ca3af;">{{ $stats['pendientes'] }} pendientes</small></div>
    </a>
</div>
<br>

<div class="cards-grid">
    <div class="stat-card" onclick="toggleCard('card-hoy')">
        <div class="sc-label">Citas hoy</div>
        <div class="sc-value">{{ $stats['hoy'] }}</div>
        <div class="sc-hint">Click para ver detalle</div>
        <span class="sc-arrow" id="arrow-card-hoy">▼</span>
        <div class="card-detail" id="card-hoy">
            @if($stats['citas_hoy']->isEmpty())
                <p class="detail-empty">Sin citas para hoy.</p>
            @else
                <table class="detail-table">
                    <thead><tr><th>Paciente</th><th>Terapeuta</th><th>Hora</th></tr></thead>
                    <tbody>
                        @foreach($stats['citas_hoy'] as $c)
                        <tr>
                            <td>{{ $c->patient_name }}</td>
                            <td>{{ $c->therapist->name ?? '—' }}</td>
                            <td>{{ \Carbon\Carbon::parse($c->time)->format('H:i') }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>
    </div>

    <div class="stat-card" onclick="toggleCard('card-pendientes')">
        <div class="sc-label">Pendientes</div>
        <div class="sc-value">{{ $stats['pendientes'] }}</div>
        <div class="sc-hint">Click para ver próximas</div>
        <span class="sc-arrow" id="arrow-card-pendientes">▼</span>
        <div class="card-detail" id="card-pendientes">
            @if($stats['proximas']->isEmpty())
                <p class="detail-empty">Sin citas pendientes.</p>
            @else
                <table class="detail-table">
                    <thead><tr><th>Paciente</th><th>Terapeuta</th><th>Fecha</th></tr></thead>
                    <tbody>
                        @foreach($stats['proximas'] as $c)
                        <tr>
                            <td>{{ $c->patient_name }}</td>
                            <td>{{ $c->therapist->name ?? '—' }}</td>
                            <td>{{ \Carbon\Carbon::parse($c->date)->format('d/m/Y') }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>
    </div>

    <div class="stat-card" onclick="toggleCard('card-completadas')">
        <div class="sc-label">Completadas</div>
        <div class="sc-value">{{ $stats['completadas'] }}</div>
        <div class="sc-hint">Total histórico</div>
        <span class="sc-arrow" id="arrow-card-completadas">▼</span>
        <div class="card-detail" id="card-completadas">
            <p class="detail-empty">{{ $stats['completadas'] }} cita(s) completada(s).</p>
        </div>
    </div>

    <div class="stat-card" onclick="toggleCard('card-canceladas')">
        <div class="sc-label">Canceladas</div>
        <div class="sc-value">{{ $stats['canceladas'] }}</div>
        <div class="sc-hint">Total histórico</div>
        <span class="sc-arrow" id="arrow-card-canceladas">▼</span>
        <div class="card-detail" id="card-canceladas">
            <p class="detail-empty">{{ $stats['canceladas'] }} cita(s) cancelada(s).</p>
        </div>
    </div>
</div>


@endsection

@section('scripts')
<script>
function toggleCard(id) {
    document.getElementById(id).classList.toggle('open');
    document.getElementById('arrow-' + id).closest('.stat-card').classList.toggle('open');
}
</script>
@endsection
