@extends('layouts.app')

@section('title', 'Citas - Administrador')

@section('content')
<!-- Header -->
<div class="mb-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">📅 Gestión de Citas</h1>
            <p class="text-sm text-gray-500 mt-1">Administrador · Vista completa</p>
        </div>
    </div>
</div>

@if(session('success'))
    <div class="mb-6 bg-secondary-light border-l-4 border-secondary rounded-lg p-4 shadow-sm animate-slide-down">
        <div class="flex items-center">
            <svg class="h-5 w-5 text-secondary-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm font-medium text-secondary-dark">{{ session('success') }}</p>
        </div>
    </div>
@endif

<!-- Filtros -->
<form method="GET" action="{{ route('admin.citas.index') }}" class="mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <!-- Paciente -->
            <div class="lg:col-span-2">
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Paciente</label>
                <input type="text" name="search" placeholder="Nombre, tutor o teléfono..." value="{{ request('search') }}" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
            </div>

            <!-- Fecha -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fecha</label>
                <input type="date" name="date" value="{{ request('date') }}" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
            </div>

            <!-- Estado -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Estado</label>
                <select name="status" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
                    <option value="">Todos</option>
                    <option value="pendiente" {{ request('status') === 'pendiente' ? 'selected' : '' }}>Pendiente</option>
                    <option value="completada" {{ request('status') === 'completada' ? 'selected' : '' }}>Completada</option>
                    <option value="cancelada" {{ request('status') === 'cancelada' ? 'selected' : '' }}>Cancelada</option>
                </select>
            </div>

            <!-- Pago -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Pago</label>
                <select name="payment_status" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
                    <option value="">Todos</option>
                    <option value="pagado" {{ request('payment_status') === 'pagado' ? 'selected' : '' }}>Pagado</option>
                    <option value="no_pagado" {{ request('payment_status') === 'no_pagado' ? 'selected' : '' }}>No pagado</option>
                </select>
            </div>
        </div>

        <!-- Botones de filtro -->
        <div class="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-200">
            <button type="submit" class="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
            </button>
            <a href="{{ route('admin.citas.index') }}" class="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpiar
            </a>
        </div>
    </div>
</form>

<!-- Resultados -->
<div class="mb-4 text-sm text-gray-500">
    Mostrando <strong class="text-gray-900">{{ $appointments->firstItem() ?? 0 }}–{{ $appointments->lastItem() ?? 0 }}</strong> de <strong class="text-gray-900">{{ $appointments->total() }}</strong> cita(s)
    @if(request('search') || request('date') || request('status') || request('payment_status'))
        · <em>con filtros</em>
    @endif
</div>

<!-- Tabla -->
@if($appointments->isEmpty())
    <div class="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">No hay citas</h3>
        <p class="text-gray-500 mb-4">No se encontraron citas con los filtros aplicados.</p>
        <a href="{{ route('admin.citas.index') }}" class="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
            Ver todas
        </a>
    </div>
@else
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-primary">
                    <tr>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">#</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Paciente</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Terapeuta</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Creado por</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Fecha</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hora</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Estado</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Pago</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    @foreach($appointments as $c)
                        @php
                            $paymentStatus = $c->payment_status ?? 'no_pagado';
                        @endphp
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="px-4 py-3 text-xs text-gray-500">{{ $c->id }}</td>
                            <td class="px-4 py-3">
                                <div class="font-semibold text-sm text-gray-900">{{ $c->patient->nombre_paciente ?? 'Sin paciente' }}</div>
                                <div class="text-xs text-gray-500 mt-1">
                                    Edad: {{ $c->patient->edad ?? '-' }} · Tel: {{ $c->patient->telefono_tutor ?? '-' }}<br>
                                    Tutor: {{ $c->patient->nombre_tutor ?? '-' }}<br>
                                    Dom: {{ $c->patient->domicilio ?? '-' }}
                                </div>
                            </td>
                            <td class="px-4 py-3">
                                <div class="text-sm text-gray-900">{{ $c->therapist->name ?? '—' }}</div>
                                @if($c->therapist?->tipoTerapeutaLabel())
                                    <div class="text-xs text-gray-500">{{ $c->therapist->tipoTerapeutaLabel() }}</div>
                                @endif
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-700">{{ $c->creator->name ?? '—' }}</td>
                            <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ \Carbon\Carbon::parse($c->date)->format('d/m/Y') }}</td>
                            <td class="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{{ \Carbon\Carbon::parse($c->time)->format('H:i') }}</td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                @if($c->status === 'pendiente')
                                    <span class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">Pendiente</span>
                                @elseif($c->status === 'completada')
                                    <span class="inline-flex rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary-dark border border-secondary">Completada</span>
                                @else
                                    <span class="inline-flex rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary-dark border border-primary">{{ ucfirst($c->status) }}</span>
                                @endif
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <form action="{{ route('admin.citas.payment', $c) }}" method="POST" style="display:inline">
                                    @csrf @method('PATCH')
                                    <input type="hidden" name="payment_status" value="{{ $paymentStatus === 'pagado' ? 'no_pagado' : 'pagado' }}">
                                    <button type="submit" class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-all {{ $paymentStatus === 'pagado' ? 'bg-secondary-light text-secondary-dark border border-secondary hover:bg-secondary hover:text-white' : 'bg-primary-light text-primary-dark border border-primary hover:bg-primary hover:text-white' }}">
                                        @if($paymentStatus === 'pagado')
                                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                            Pagado
                                        @else
                                            No pagado
                                        @endif
                                    </button>
                                </form>
                            </td>
                            <td class="px-4 py-3">
                                <div class="flex flex-wrap gap-2">
                                    <a href="{{ route('admin.citas.edit', $c) }}" class="inline-flex items-center rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 border border-amber-200 hover:bg-amber-100 transition-all">
                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Editar
                                    </a>
                                    @if($c->status === 'pendiente')
                                        <form action="{{ route('admin.citas.complete', $c) }}" method="POST" onsubmit="return confirm('¿Marcar como completada?')" class="inline">
                                            @csrf @method('PATCH')
                                            <button class="inline-flex items-center rounded-lg bg-secondary-light px-3 py-1.5 text-xs font-semibold text-secondary-dark border border-secondary hover:bg-secondary hover:text-white transition-all">
                                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Completar
                                            </button>
                                        </form>
                                        <form action="{{ route('admin.citas.cancel', $c) }}" method="POST" onsubmit="return confirm('¿Cancelar?')" class="inline">
                                            @csrf @method('PATCH')
                                            <button class="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 hover:bg-gray-200 transition-all">
                                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Cancelar
                                            </button>
                                        </form>
                                    @endif
                                    <form action="{{ route('admin.citas.destroy', $c) }}" method="POST" onsubmit="return confirm('¿Eliminar permanentemente?')" class="inline">
                                        @csrf @method('DELETE')
                                        <button class="inline-flex items-center rounded-lg bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary-dark border border-primary hover:bg-primary hover:text-white transition-all">
                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Eliminar
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <!-- Paginación -->
    @if($appointments->hasPages())
        <div class="mt-6 flex justify-center">
            <nav class="flex items-center space-x-2">
                @if($appointments->onFirstPage())
                    <span class="px-3 py-2 text-sm text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">‹</span>
                @else
                    <a href="{{ $appointments->previousPageUrl() }}" class="px-3 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">‹</a>
                @endif

                @foreach($appointments->getUrlRange(1, $appointments->lastPage()) as $page => $url)
                    @if($page == $appointments->currentPage())
                        <span class="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg">{{ $page }}</span>
                    @else
                        <a href="{{ $url }}" class="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">{{ $page }}</a>
                    @endif
                @endforeach

                @if($appointments->hasMorePages())
                    <a href="{{ $appointments->nextPageUrl() }}" class="px-3 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">›</a>
                @else
                    <span class="px-3 py-2 text-sm text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">›</span>
                @endif
            </nav>
        </div>
    @endif
@endif
@endsection
