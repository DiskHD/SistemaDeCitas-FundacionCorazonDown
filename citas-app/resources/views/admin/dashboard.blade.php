@extends('layouts.app')

@section('title', 'Panel Administrador')

@section('styles')
<style>
    .dashboard-header {
        background: linear-gradient(135deg, #1e3a8a, #1e40af);
        color: #fff;
        border-radius: 12px;
        padding: 2rem 2.25rem;
        margin-bottom: 2rem;
    }
    .dashboard-header h1 { font-size: 1.75rem; margin-bottom: .4rem; }
    .dashboard-header p  { opacity: .85; font-size: .95rem; }

    .badge {
        display: inline-block;
        background: rgba(255,255,255,.25);
        border: 1px solid rgba(255,255,255,.5);
        border-radius: 20px;
        font-size: .8rem;
        padding: .2rem .8rem;
        font-weight: 600;
        margin-top: .6rem;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.25rem;
        margin-bottom: 2rem;
    }
    .stat-card {
        background: #fff;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 0 2px 10px rgba(0,0,0,.06);
        border-left: 4px solid #1e40af;
    }
    .stat-card .label { font-size: .82rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }
    .stat-card .value { font-size: 2rem; font-weight: 700; color: #1e40af; margin-top: .3rem; }

    .section-title { font-size: 1.1rem; font-weight: 700; color: #374151; margin-bottom: 1rem; }

    .action-list { display: flex; flex-direction: column; gap: .6rem; }
    .action-item {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: .9rem 1.2rem;
        display: flex;
        align-items: center;
        gap: .75rem;
        font-size: .92rem;
        color: #374151;
    }
    .action-item .icon { font-size: 1.3rem; }
    a.action-item {
        text-decoration: none;
        transition: background .15s, border-color .15s;
    }
    a.action-item:hover {
        background: #eff6ff;
        border-color: #1e40af;
        color: #1e3a8a;
    }
</style>
@endsection

@section('content')
<div class="dashboard-header">
    <h1>Panel de Administrador</h1>
    <p>Bienvenido, <strong>{{ Auth::user()->name }}</strong>. Tienes acceso completo al sistema.</p>
    <span class="badge">🔑 Administrador</span>
</div>

<div class="cards-grid">
    <div class="stat-card">
        <div class="label">Usuarios</div>
        <div class="value">—</div>
    </div>
    <div class="stat-card">
        <div class="label">Citas hoy</div>
        <div class="value">—</div>
    </div>
    <div class="stat-card">
        <div class="label">Terapeutas</div>
        <div class="value">—</div>
    </div>
    <div class="stat-card">
        <div class="label">Recepcionistas</div>
        <div class="value">—</div>
    </div>
</div>

<p class="section-title">Acciones disponibles</p>
<div class="action-list">
    <a href="{{ route('admin.citas.index') }}" class="action-item">
        <span class="icon">📅</span> Ver todas las citas
    </a>
</div>
@endsection
