@extends('layouts.app')

@section('title', 'Editar paciente')

@section('styles')
<script src="https://cdn.tailwindcss.com"></script>
@endsection

@section('content')
<div class="mx-auto max-w-3xl space-y-6">
    <div>
        <a href="{{ route('patients.show', $patient) }}" class="text-sm font-semibold text-red-600 hover:text-red-700">Volver al paciente</a>
        <h1 class="mt-2 text-2xl font-bold text-slate-900">Editar paciente</h1>
    </div>

    <div class="rounded-xl bg-white p-6 shadow-sm">
        <form method="POST" action="{{ route('patients.update', $patient) }}" class="space-y-5">
            @csrf
            @method('PUT')

            <div>
                <label for="nombre_paciente" class="mb-1 block text-sm font-bold text-slate-700">Nombre del paciente *</label>
                <input
                    id="nombre_paciente"
                    name="nombre_paciente"
                    type="text"
                    value="{{ old('nombre_paciente', $patient->nombre_paciente) }}"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                    required
                >
                @error('nombre_paciente') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                <div>
                    <label for="edad" class="mb-1 block text-sm font-bold text-slate-700">Edad *</label>
                    <input
                        id="edad"
                        name="edad"
                        type="number"
                        min="0"
                        max="120"
                        value="{{ old('edad', $patient->edad) }}"
                        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                        required
                    >
                    @error('edad') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div>
                    <label for="nombre_tutor" class="mb-1 block text-sm font-bold text-slate-700">Nombre del tutor *</label>
                    <input
                        id="nombre_tutor"
                        name="nombre_tutor"
                        type="text"
                        value="{{ old('nombre_tutor', $patient->nombre_tutor) }}"
                        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                        required
                    >
                    @error('nombre_tutor') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                <div>
                    <label for="telefono_tutor" class="mb-1 block text-sm font-bold text-slate-700">Teléfono del tutor *</label>
                    <input
                        id="telefono_tutor"
                        name="telefono_tutor"
                        type="text"
                        value="{{ old('telefono_tutor', $patient->telefono_tutor) }}"
                        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                        required
                    >
                    @error('telefono_tutor') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>

                <div>
                    <label for="email_tutor" class="mb-1 block text-sm font-bold text-slate-700">Gmail del tutor</label>
                    <input
                        id="email_tutor"
                        name="email_tutor"
                        type="email"
                        value="{{ old('email_tutor', $patient->email_tutor) }}"
                        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                    >
                    @error('email_tutor') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
                </div>
            </div>

            <div>
                <label for="domicilio" class="mb-1 block text-sm font-bold text-slate-700">Domicilio *</label>
                <input
                    id="domicilio"
                    name="domicilio"
                    type="text"
                    value="{{ old('domicilio', $patient->domicilio) }}"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                    required
                >
                @error('domicilio') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div>
                <label for="nota_paciente" class="mb-1 block text-sm font-bold text-slate-700">Nota del paciente</label>
                <textarea
                    id="nota_paciente"
                    name="nota_paciente"
                    rows="5"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                >{{ old('nota_paciente', $patient->nota_paciente) }}</textarea>
                @error('nota_paciente') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
            </div>

            <div class="flex flex-wrap gap-3">
                <button class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                    Guardar cambios
                </button>
                <a href="{{ route('patients.show', $patient) }}" class="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                    Cancelar
                </a>
            </div>
        </form>
    </div>
</div>
@endsection
