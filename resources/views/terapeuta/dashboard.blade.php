@extends('layouts.app')

@section('title', 'Panel Terapeuta')

@section('content')
<!-- Header con gradiente -->
<div class="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl shadow-lg mb-8">
    <div class="absolute inset-0 bg-black opacity-5"></div>
    <div class="relative px-6 sm:px-8 py-8 sm:py-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
                <div class="flex items-center space-x-3 mb-2">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h1 class="text-2xl sm:text-3xl font-bold text-white">Panel de Terapeuta</h1>
                </div>
                <p class="text-white text-opacity-90 text-sm sm:text-base">
                    Bienvenido, <strong class="font-semibold">{{ Auth::user()->name }}</strong>. Aquí están tus sesiones programadas.
                </p>
            </div>
            <div class="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full border border-white border-opacity-30">
                <span class="text-white font-bold text-xs uppercase tracking-wider">🧠 Terapeuta</span>
            </div>
        </div>
    </div>
</div>

<!-- Acciones rápidas -->
<div class="mb-8">
    <h2 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Acciones rápidas</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="{{ route('terapeuta.citas.index') }}" class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-200 hover:border-blue-500 hover-lift">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-all">
                    <svg class="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">Ver mis citas</h3>
                    <p class="text-sm text-gray-500 mt-0.5">{{ $stats['pendientes'] }} pendientes</p>
                </div>
            </div>
        </a>

        <a href="{{ route('patients.index') }}" class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-200 hover:border-secondary hover-lift">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:shadow-secondary transition-all">
                    <svg class="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 group-hover:text-secondary transition-colors">Ver mis pacientes</h3>
                    <p class="text-sm text-gray-500 mt-0.5">Solo pacientes asignados</p>
                </div>
            </div>
        </a>
    </div>
</div>

<!-- Estadísticas -->
<div class="mb-8">
    <h2 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Mi agenda</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Card: Citas hoy -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover-lift" onclick="toggleCard('card-hoy')">
            <div class="p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wide">Citas hoy</p>
                        <p class="text-3xl font-extrabold text-blue-500 mt-2">{{ $stats['hoy'] }}</p>
                        <p class="text-xs text-gray-400 mt-1">Click para detalles</p>
                    </div>
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-100">
                <div id="card-hoy" class="hidden p-4 bg-gray-50">
                    @if($stats['citas_hoy']->isEmpty())
                        <p class="text-sm text-gray-500 text-center py-2">Sin citas para hoy.</p>
                    @else
                        <div class="space-y-2">
                            @foreach($stats['citas_hoy'] as $c)
                                <div class="flex items-center justify-between text-sm bg-white p-2 rounded">
                                    <span class="font-medium text-gray-700">{{ $c->patient->nombre_paciente ?? 'Sin paciente' }}</span>
                                    <span class="text-gray-500">{{ \Carbon\Carbon::parse($c->time)->format('H:i') }}</span>
                                </div>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <!-- Card: Pendientes -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover-lift" onclick="toggleCard('card-pendientes')">
            <div class="p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wide">Pendientes</p>
                        <p class="text-3xl font-extrabold text-amber-500 mt-2">{{ $stats['pendientes'] }}</p>
                        <p class="text-xs text-gray-400 mt-1">Click para próximas</p>
                    </div>
                    <div class="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-100">
                <div id="card-pendientes" class="hidden p-4 bg-gray-50">
                    @if($stats['proximas']->isEmpty())
                        <p class="text-sm text-gray-500 text-center py-2">Sin citas pendientes.</p>
                    @else
                        <div class="space-y-2">
                            @foreach($stats['proximas']->take(5) as $c)
                                <div class="flex items-center justify-between text-sm bg-white p-2 rounded">
                                    <span class="font-medium text-gray-700">{{ $c->patient->nombre_paciente ?? 'Sin paciente' }}</span>
                                    <span class="text-gray-500">{{ \Carbon\Carbon::parse($c->date)->format('d/m/Y') }}</span>
                                </div>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <!-- Card: Completadas -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover-lift">
            <div class="p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wide">Completadas</p>
                        <p class="text-3xl font-extrabold text-secondary mt-2">{{ $stats['completadas'] }}</p>
                        <p class="text-xs text-gray-400 mt-1">Sesiones realizadas</p>
                    </div>
                    <div class="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card: Total -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover-lift">
            <div class="p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wide">Total asignadas</p>
                        <p class="text-3xl font-extrabold text-gray-700 mt-2">{{ $stats['total'] }}</p>
                        <p class="text-xs text-gray-400 mt-1">Todas mis citas</p>
                    </div>
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
function toggleCard(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}
</script>
@endsection
