@extends('layouts.app')

@section('title', 'Panel Administrador')

@section('styles')
<style>
    /* All shared tokens come from layouts/app.blade.php */
    /* Admin accent overrides – cards keep red from global, action btn hover adjusted */
    .action-btn:hover { border-color: var(--red); box-shadow: 0 0 0 3px rgba(255,23,23,.1); }
    /* Completada card value in green to distinguish */
    .stat-card[data-card="completadas"] .sc-value { color: var(--green); }
    .stat-card[data-card="completadas"] { border-top-color: var(--green); }
    .stat-card[data-card="completadas"] .sc-arrow { color: var(--green); }
</style>
@endsection

@section('content')

<div class="dash-header">
    <div>
        <h1>⚙️ Panel de Administrador</h1>
        <p>Bienvenido, <strong>{{ Auth::user()->name }}</strong>. Tienes acceso completo al sistema.</p>
    </div>
    <span class="dash-badge">🔑 Administrador</span>
</div>

{{-- ── Acciones ────────────────────────────────────────────────────────────── --}}
<p class="section-title">Acciones rápidas</p>
<div class="action-grid">
    <a href="{{ route('admin.citas.index') }}" class="action-btn">
        <span class="ab-icon">📅</span>
        <div>
            <div>Ver todas las citas</div>
            <small style="font-weight:400;color:#9ca3af;">{{ $stats['total'] }} en total</small>
        </div>
    </a>
</div>
<br>

{{-- ── Cards interactivas ──────────────────────────────────────────────── --}}
<div class="cards-grid">

    {{-- Card: Citas hoy --}}
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

    {{-- Card: Pendientes --}}
    <div class="stat-card" onclick="toggleCard('card-pendientes')">
        <div class="sc-label">Pendientes</div>
        <div class="sc-value">{{ $stats['pendientes'] }}</div>
        <div class="sc-hint">Click para ver detalle</div>
        <span class="sc-arrow" id="arrow-card-pendientes">▼</span>
        <div class="card-detail" id="card-pendientes">
            @if($stats['citas_pendientes']->isEmpty())
                <p class="detail-empty">Sin citas pendientes.</p>
            @else
                <table class="detail-table">
                    <thead><tr><th>Paciente</th><th>Terapeuta</th><th>Fecha</th></tr></thead>
                    <tbody>
                        @foreach($stats['citas_pendientes'] as $c)
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

    {{-- Card: Completadas --}}
    <div class="stat-card" onclick="toggleCard('card-completadas')">
        <div class="sc-label">Completadas</div>
        <div class="sc-value">{{ $stats['completadas'] }}</div>
        <div class="sc-hint">Total histórico</div>
        <span class="sc-arrow" id="arrow-card-completadas">▼</span>
        <div class="card-detail" id="card-completadas">
            <p class="detail-empty">{{ $stats['completadas'] }} cita(s) completada(s) en total.</p>
        </div>
    </div>

    {{-- Card: Terapeutas --}}
    <div class="stat-card" onclick="toggleCard('card-terapeutas')">
        <div class="sc-label">Terapeutas</div>
        <div class="sc-value">{{ $stats['terapeutas'] }}</div>
        <div class="sc-hint">Usuarios registrados</div>
        <span class="sc-arrow" id="arrow-card-terapeutas">▼</span>
        <div class="card-detail" id="card-terapeutas">
            <p class="detail-empty">{{ $stats['terapeutas'] }} terapeuta(s) · {{ $stats['recepcionistas'] }} recepcionista(s)</p>
        </div>
    </div>

</div>



@endsection

@section('scripts')
<script>
function toggleCard(id) {
    const detail = document.getElementById(id);
    const arrow  = document.getElementById('arrow-' + id);
    const card   = detail.closest('.stat-card');
    detail.classList.toggle('open');
    card.classList.toggle('open');
}
</script>
@endsection
