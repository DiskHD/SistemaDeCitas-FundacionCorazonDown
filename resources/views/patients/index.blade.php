@extends('layouts.app')

@section('title', 'Pacientes')

@section('styles')
<script src="https://cdn.tailwindcss.com"></script>
@endsection

@section('content')
<div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <h1 class="text-2xl font-bold text-slate-900">Pacientes</h1>
            <p class="text-sm text-slate-500">Perfiles clínicos e historial de citas.</p>
        </div>

        <form method="GET" action="{{ route('patients.index') }}" class="flex w-full gap-2 sm:w-auto">
            <input
                type="text"
                name="search"
                value="{{ request('search') }}"
                placeholder="Buscar paciente..."
                class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 sm:w-72"
            >
            <button class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                Buscar
            </button>
        </form>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        @forelse($patients as $patient)
            <a href="{{ route('patients.show', $patient) }}" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-red-200 hover:shadow-md">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex-1">
                        <h2 class="font-bold text-slate-900">{{ $patient->nombre_paciente }}</h2>
                        @if($patient->edad)
                            <p class="mt-1 text-sm text-slate-500">{{ $patient->edad }} años</p>
                        @endif
                        @if($patient->nombre_tutor)
                            <p class="text-sm text-slate-500">Tutor: {{ $patient->nombre_tutor }}</p>
                        @endif
                        <p class="text-sm text-slate-500">{{ $patient->telefono_tutor ?? 'Sin teléfono' }}</p>
                    </div>
                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {{ $patient->appointments_count }} cita(s)
                    </span>
                </div>

                @if($canSeePayments)
                    @php($pending = (float) ($patient->pending_payments_sum ?? 0))
                    <div class="mt-4 rounded-lg {{ $pending > 0 ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-800' }} px-3 py-2 text-sm font-semibold">
                        {{ $pending > 0 ? 'Pendiente: $' . number_format($pending, 2) : 'Sin pagos pendientes' }}
                    </div>
                @endif
            </a>
        @empty
            <div class="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                No hay pacientes para mostrar.
            </div>
        @endforelse
    </div>

    @if($patients->hasPages())
        <div class="rounded-xl bg-white p-4 shadow-sm">
            {{ $patients->links() }}
        </div>
    @endif
</div>
@endsection
