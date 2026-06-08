@extends('layouts.app')

@section('title', $patient->nombre_paciente)

@section('content')
<!-- Header -->
<div class="mb-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <a href="{{ route('patients.index') }}" class="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark mb-2">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Volver a pacientes
            </a>
            <h1 class="text-2xl font-bold text-gray-900">{{ $patient->nombre_paciente }}</h1>
        </div>

        <div class="flex flex-wrap gap-3">
            @if(auth()->user()->isAdmin() || auth()->user()->isRecepcionista())
                <a href="{{ route('patients.edit', $patient) }}" class="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar paciente
                </a>
            @endif

            @if($canSeePayments)
                <div class="rounded-xl {{ $pendingPayments > 0 ? 'bg-amber-50 border border-amber-200' : 'bg-secondary-light border border-secondary' }} px-4 py-3 text-sm font-bold">
                    <div class="flex items-center space-x-2">
                        @if($pendingPayments > 0)
                            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-amber-800">Pagos pendientes: ${{ number_format($pendingPayments, 2) }}</span>
                        @else
                            <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-secondary-dark">Sin pagos pendientes</span>
                        @endif
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

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

<!-- Información del paciente -->
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Edad</p>
        <p class="text-lg font-bold text-gray-900">{{ $patient->edad ?? 'No registrado' }} años</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Tutor</p>
        <p class="text-lg font-bold text-gray-900 truncate">{{ $patient->nombre_tutor ?? 'No registrado' }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Teléfono</p>
        <p class="text-lg font-bold text-gray-900">{{ $patient->telefono_tutor ?? 'No registrado' }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Email</p>
        <p class="text-sm font-semibold text-gray-900 truncate">{{ $patient->email_tutor ?? 'No registrado' }}</p>
    </div>
</div>

<div class="grid gap-4 sm:grid-cols-2 mb-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Domicilio</p>
        <p class="text-sm font-semibold text-gray-900">{{ $patient->domicilio ?? 'No registrado' }}</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover-lift">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Citas registradas</p>
        <p class="text-lg font-bold text-primary">{{ $appointments->count() }}</p>
    </div>
</div>

@if($patient->nota_paciente)
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
        <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Nota del paciente</p>
        <p class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{{ $patient->nota_paciente }}</p>
    </div>
@endif

<!-- Historial de citas -->
<div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h2 class="text-lg font-bold text-gray-900">Historial de citas</h2>
    </div>

    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Terapeuta</th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Diagnóstico</th>
                    <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Estado</th>
                    @if($canSeePayments)
                        <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Pago</th>
                        <th class="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Precio</th>
                    @endif
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($appointments as $appointment)
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-semibold text-gray-900">{{ \Carbon\Carbon::parse($appointment->date)->format('d/m/Y') }}</div>
                            <div class="text-xs text-gray-500">{{ \Carbon\Carbon::parse($appointment->time)->format('H:i') }}</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">{{ $appointment->therapist->name ?? '-' }}</div>
                            @if($appointment->therapist?->tipoTerapeutaLabel())
                                <div class="text-xs text-gray-500">{{ $appointment->therapist->tipoTerapeutaLabel() }}</div>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-700">
                            {{ $appointment->diagnosis ?: 'Sin diagnóstico' }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            @if($appointment->status === 'pendiente')
                                <span class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">Pendiente</span>
                            @elseif($appointment->status === 'completada')
                                <span class="inline-flex rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary-dark border border-secondary">Completada</span>
                            @else
                                <span class="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 border border-gray-200">{{ ucfirst($appointment->status) }}</span>
                            @endif
                        </td>
                        @if($canSeePayments)
                            <td class="px-6 py-4 whitespace-nowrap">
                                @if($appointment->paid)
                                    <span class="inline-flex items-center rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary-dark border border-secondary">
                                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        Pagado
                                    </span>
                                @else
                                    <span class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">Pendiente</span>
                                @endif
                            </td>
                            <td class="px-6 py-4 text-right text-sm font-bold text-gray-900 whitespace-nowrap">
                                ${{ number_format((float) $appointment->price, 2) }}
                            </td>
                        @endif
                    </tr>
                @empty
                    <tr>
                        <td colspan="{{ $canSeePayments ? 6 : 4 }}" class="px-6 py-10 text-center text-sm text-gray-500">
                            No hay citas visibles para este paciente.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
