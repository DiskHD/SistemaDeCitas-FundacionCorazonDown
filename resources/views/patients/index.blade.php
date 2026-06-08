@extends('layouts.app')

@section('title', 'Pacientes')

@section('content')
<!-- Header -->
<div class="mb-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">Pacientes</h1>
            <p class="text-sm text-gray-500 mt-1">Perfiles clínicos e historial de citas</p>
        </div>

        <form method="GET" action="{{ route('patients.index') }}" class="flex w-full sm:w-auto gap-2">
            <input
                type="text"
                name="search"
                value="{{ request('search') }}"
                placeholder="Buscar paciente..."
                class="flex-1 sm:w-72 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
            >
            <button type="submit" class="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
                Buscar
            </button>
        </form>
    </div>
</div>

<!-- Grid de pacientes -->
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    @forelse($patients as $patient)
        <a href="{{ route('patients.show', $patient) }}" class="group bg-white rounded-xl border border-gray-200 p-5 shadow-sm transition-all hover:shadow-md hover:border-primary hover-lift">
            <div class="flex items-start justify-between gap-3">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center space-x-2 mb-2">
                        <div class="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                            <svg class="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h2 class="font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                            {{ $patient->nombre_paciente }}
                        </h2>
                    </div>

                    @if($patient->edad)
                        <p class="text-sm text-gray-600 mb-1">
                            <span class="font-medium">Edad:</span> {{ $patient->edad }} años
                        </p>
                    @endif

                    @if($patient->nombre_tutor)
                        <p class="text-sm text-gray-600 mb-1">
                            <span class="font-medium">Tutor:</span> {{ $patient->nombre_tutor }}
                        </p>
                    @endif

                    <p class="text-sm text-gray-600">
                        <span class="font-medium">Tel:</span> {{ $patient->telefono_tutor ?? 'Sin teléfono' }}
                    </p>
                </div>

                <div class="flex-shrink-0">
                    <span class="inline-flex items-center justify-center rounded-full bg-secondary-light px-3 py-1.5 text-xs font-bold text-secondary-dark">
                        {{ $patient->appointments_count }} cita(s)
                    </span>
                </div>
            </div>

            @if($canSeePayments)
                @php($pending = (float) ($patient->pending_payments_sum ?? 0))
                <div class="mt-4 rounded-lg {{ $pending > 0 ? 'bg-amber-50 border border-amber-200' : 'bg-secondary-light border border-secondary' }} px-3 py-2">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold {{ $pending > 0 ? 'text-amber-800' : 'text-secondary-dark' }}">
                            {{ $pending > 0 ? 'Pendiente de pago' : 'Sin pagos pendientes' }}
                        </span>
                        @if($pending > 0)
                            <span class="text-sm font-extrabold text-amber-900">
                                ${{ number_format($pending, 2) }}
                            </span>
                        @else
                            <svg class="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                        @endif
                    </div>
                </div>
            @endif
        </a>
    @empty
        <div class="col-span-full">
            <div class="rounded-xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">No hay pacientes</h3>
                <p class="text-gray-500">No se encontraron pacientes con los criterios de búsqueda.</p>
            </div>
        </div>
    @endforelse
</div>

<!-- Paginación -->
@if($patients->hasPages())
    <div class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        {{ $patients->links() }}
    </div>
@endif
@endsection
