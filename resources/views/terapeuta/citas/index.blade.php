@extends('layouts.app')

@section('title', 'Mis Citas')

@section('content')
<!-- Header -->
<div class="mb-6">
    <div>
        <h1 class="text-2xl font-bold text-gray-900">Mis Citas</h1>
        <p class="text-sm text-gray-500 mt-1">Terapeuta · Solo mis citas asignadas</p>
    </div>
</div>

<!-- Success Message -->
@if(session('success'))
    <div class="mb-6 bg-secondary-light border-l-4 border-secondary rounded-lg p-4 shadow-sm">
        <div class="flex items-center">
            <svg class="h-5 w-5 text-secondary-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm font-medium text-secondary-dark">{{ session('success') }}</p>
        </div>
    </div>
@endif

<!-- Filtros -->
<form method="GET" action="{{ route('terapeuta.citas.index') }}">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Búsqueda de paciente -->
            <div class="lg:col-span-2">
                <label for="search" class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Paciente
                </label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value="{{ request('search') }}"
                    placeholder="Buscar nombre..."
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                >
            </div>

            <!-- Fecha -->
            <div>
                <label for="date" class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Fecha
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value="{{ request('date') }}"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                >
            </div>

            <!-- Estado -->
            <div>
                <label for="status" class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Estado
                </label>
                <select
                    id="status"
                    name="status"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                >
                    <option value="">Todos</option>
                    <option value="pendiente" {{ request('status') === 'pendiente' ? 'selected' : '' }}>Pendiente</option>
                    <option value="completada" {{ request('status') === 'completada' ? 'selected' : '' }}>Completada</option>
                    <option value="cancelada" {{ request('status') === 'cancelada' ? 'selected' : '' }}>Cancelada</option>
                </select>
            </div>
        </div>

        <!-- Botones de filtro -->
        <div class="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-200">
            <button type="submit" class="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
            </button>
            <a href="{{ route('terapeuta.citas.index') }}" class="inline-flex items-center rounded-lg bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpiar
            </a>
        </div>
    </div>
</form>

<!-- Resultados -->
<div class="text-sm text-gray-500 mb-4">
    Mostrando <span class="font-semibold text-gray-900">{{ $appointments->firstItem() ?? 0 }}–{{ $appointments->lastItem() ?? 0 }}</span>
    de <span class="font-semibold text-gray-900">{{ $appointments->total() }}</span> cita(s)
    @if(request('search') || request('date') || request('status'))
        <span class="text-gray-400">· con filtros</span>
    @endif
</div>

<!-- Tabla -->
@if($appointments->isEmpty())
    <div class="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">No hay citas</h3>
        <p class="text-gray-500 mb-4">No se encontraron citas con los filtros aplicados.</p>
        <a href="{{ route('terapeuta.citas.index') }}" class="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
            Ver todas las citas
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
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Fecha</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hora</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Descripción</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Estado</th>
                        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Acción</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    @foreach($appointments as $c)
                        <tr class="hover:bg-gray-50 transition-colors">
                            <!-- ID -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                <span class="text-xs font-medium text-gray-400">#{{ $c->id }}</span>
                            </td>

                            <!-- Paciente -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                <span class="text-sm font-semibold text-gray-900">
                                    {{ $c->patient->nombre_paciente ?? 'Sin paciente' }}
                                </span>
                            </td>

                            <!-- Fecha -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                <span class="text-sm font-medium text-gray-900">
                                    {{ \Carbon\Carbon::parse($c->date)->format('d/m/Y') }}
                                </span>
                            </td>

                            <!-- Hora -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                <span class="text-sm font-medium text-gray-900">
                                    {{ \Carbon\Carbon::parse($c->time)->format('H:i') }}
                                </span>
                            </td>

                            <!-- Descripción -->
                            <td class="px-4 py-4">
                                <div class="max-w-xs truncate text-sm text-gray-700" title="{{ $c->description }}">
                                    {{ $c->description ?? '—' }}
                                </div>
                            </td>

                            <!-- Estado -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                @if($c->status === 'pendiente')
                                    <span class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">Pendiente</span>
                                @elseif($c->status === 'completada')
                                    <span class="inline-flex rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary-dark border border-secondary">Completada</span>
                                @elseif($c->status === 'cancelada')
                                    <span class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 border border-gray-200">Cancelada</span>
                                @else
                                    <span class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 border border-gray-200">{{ ucfirst($c->status) }}</span>
                                @endif
                            </td>

                            <!-- Acción -->
                            <td class="px-4 py-4 whitespace-nowrap">
                                @if($c->status === 'pendiente')
                                    <form action="{{ route('terapeuta.citas.complete', $c) }}" method="POST" class="inline" onsubmit="return confirm('¿Marcar como completada?')">
                                        @csrf
                                        @method('PATCH')
                                        <button type="submit" class="inline-flex items-center rounded-lg bg-secondary-light px-3 py-1.5 text-xs font-semibold text-secondary-dark border border-secondary hover:bg-secondary hover:text-white transition-all">
                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Completar
                                        </button>
                                    </form>
                                @else
                                    <span class="text-xs text-gray-400">—</span>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <!-- Paginación -->
    @if($appointments->hasPages())
        <div class="mt-6">
            {{ $appointments->links() }}
        </div>
    @endif
@endif
@endsection
