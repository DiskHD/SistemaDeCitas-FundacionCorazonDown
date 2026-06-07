@extends('layouts.app')

@section('title', $patient->nombre_paciente)

@section('styles')
<script src="https://cdn.tailwindcss.com"></script>
@endsection

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <a href="{{ route('patients.index') }}" class="text-sm font-semibold text-red-600 hover:text-red-700">Volver a pacientes</a>
            <h1 class="mt-2 text-2xl font-bold text-slate-900">{{ $patient->nombre_paciente }}</h1>
        </div>

        <div class="flex flex-wrap gap-3">
            @if(auth()->user()->isAdmin() || auth()->user()->isRecepcionista())
                <a href="{{ route('patients.edit', $patient) }}" class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                    Editar paciente
                </a>
            @endif

            @if($canSeePayments)
                <div class="rounded-xl {{ $pendingPayments > 0 ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800' }} px-4 py-3 text-sm font-bold">
                    {{ $pendingPayments > 0 ? 'Pagos pendientes: $' . number_format($pendingPayments, 2) : 'Sin pagos pendientes' }}
                </div>
            @endif
        </div>
    </div>

    @if(session('success'))
        <div class="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            {{ session('success') }}
        </div>
    @endif

    <div class="grid gap-4 md:grid-cols-4">
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Edad</p>
            <p class="mt-1 text-slate-900">{{ $patient->edad ?? 'No registrado' }} años</p>
        </div>
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Tutor</p>
            <p class="mt-1 text-slate-900">{{ $patient->nombre_tutor ?? 'No registrado' }}</p>
        </div>
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Teléfono del tutor</p>
            <p class="mt-1 text-slate-900">{{ $patient->telefono_tutor ?? 'No registrado' }}</p>
        </div>
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Email del tutor</p>
            <p class="mt-1 text-slate-900">{{ $patient->email_tutor ?? 'No registrado' }}</p>
        </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Domicilio</p>
            <p class="mt-1 text-slate-900">{{ $patient->domicilio ?? 'No registrado' }}</p>
        </div>
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Citas registradas</p>
            <p class="mt-1 text-slate-900">{{ $appointments->count() }}</p>
        </div>
    </div>

    @if($patient->nota_paciente)
        <div class="rounded-xl bg-white p-5 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-400">Nota del paciente</p>
            <p class="mt-2 whitespace-pre-line text-sm text-slate-700">{{ $patient->nota_paciente }}</p>
        </div>
    @endif

    <div class="overflow-hidden rounded-xl bg-white shadow-sm">
        <div class="border-b border-slate-100 px-5 py-4">
            <h2 class="font-bold text-slate-900">Historial de citas</h2>
        </div>

        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-slate-100 text-sm">
                <thead class="bg-slate-50 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    <tr>
                        <th class="px-5 py-3">Fecha</th>
                        <th class="px-5 py-3">Terapeuta</th>
                        <th class="px-5 py-3">Diagnóstico</th>
                        <th class="px-5 py-3">Estado</th>
                        @if($canSeePayments)
                            <th class="px-5 py-3">Pago</th>
                            <th class="px-5 py-3 text-right">Precio</th>
                        @endif
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    @forelse($appointments as $appointment)
                        <tr>
                            <td class="px-5 py-4 whitespace-nowrap">
                                {{ \Carbon\Carbon::parse($appointment->date)->format('d/m/Y') }}
                                <div class="text-xs text-slate-500">{{ \Carbon\Carbon::parse($appointment->time)->format('H:i') }}</div>
                            </td>
                            <td class="px-5 py-4">
                                {{ $appointment->therapist->name ?? '-' }}
                                @if($appointment->therapist?->tipoTerapeutaLabel())
                                    <div class="text-xs text-slate-500">{{ $appointment->therapist->tipoTerapeutaLabel() }}</div>
                                @endif
                            </td>
                            <td class="px-5 py-4 text-slate-700">
                                {{ $appointment->diagnosis ?: 'Sin diagnóstico' }}
                            </td>
                            <td class="px-5 py-4">
                                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                    {{ ucfirst($appointment->status) }}
                                </span>
                            </td>
                            @if($canSeePayments)
                                <td class="px-5 py-4">
                                    <span class="rounded-full px-3 py-1 text-xs font-bold {{ $appointment->paid ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700' }}">
                                        {{ $appointment->paid ? 'Pagado' : 'Pendiente' }}
                                    </span>
                                </td>
                                <td class="px-5 py-4 text-right font-semibold text-slate-900">
                                    ${{ number_format((float) $appointment->price, 2) }}
                                </td>
                            @endif
                        </tr>
                    @empty
                        <tr>
                            <td colspan="{{ $canSeePayments ? 6 : 4 }}" class="px-5 py-10 text-center text-slate-500">
                                No hay citas visibles para este paciente.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
