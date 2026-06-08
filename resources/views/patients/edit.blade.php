@extends('layouts.app')

@section('title', 'Editar paciente')

@section('content')
<div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
        <a href="{{ route('patients.show', $patient) }}" class="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark mb-2">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al paciente
        </a>
        <h1 class="text-2xl font-bold text-gray-900">Editar paciente</h1>
    </div>

    <!-- Formulario -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form method="POST" action="{{ route('patients.update', $patient) }}" class="space-y-5">
            @csrf
            @method('PUT')

            <!-- Nombre del paciente -->
            <div>
                <label for="nombre_paciente" class="block text-sm font-bold text-gray-700 mb-2">
                    Nombre del paciente <span class="text-primary">*</span>
                </label>
                <input
                    id="nombre_paciente"
                    name="nombre_paciente"
                    type="text"
                    value="{{ old('nombre_paciente', $patient->nombre_paciente) }}"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    required
                >
                @error('nombre_paciente')
                    <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                @enderror
            </div>

            <!-- Edad y Tutor -->
            <div class="grid gap-5 sm:grid-cols-2">
                <div>
                    <label for="edad" class="block text-sm font-bold text-gray-700 mb-2">
                        Edad <span class="text-primary">*</span>
                    </label>
                    <input
                        id="edad"
                        name="edad"
                        type="number"
                        min="0"
                        max="120"
                        value="{{ old('edad', $patient->edad) }}"
                        class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                        required
                    >
                    @error('edad')
                        <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="nombre_tutor" class="block text-sm font-bold text-gray-700 mb-2">
                        Nombre del tutor <span class="text-primary">*</span>
                    </label>
                    <input
                        id="nombre_tutor"
                        name="nombre_tutor"
                        type="text"
                        value="{{ old('nombre_tutor', $patient->nombre_tutor) }}"
                        class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                        required
                    >
                    @error('nombre_tutor')
                        <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <!-- Teléfono y Email -->
            <div class="grid gap-5 sm:grid-cols-2">
                <div>
                    <label for="telefono_tutor" class="block text-sm font-bold text-gray-700 mb-2">
                        Teléfono del tutor <span class="text-primary">*</span>
                    </label>
                    <input
                        id="telefono_tutor"
                        name="telefono_tutor"
                        type="text"
                        value="{{ old('telefono_tutor', $patient->telefono_tutor) }}"
                        class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                        required
                    >
                    @error('telefono_tutor')
                        <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="email_tutor" class="block text-sm font-bold text-gray-700 mb-2">
                        Email del tutor
                    </label>
                    <input
                        id="email_tutor"
                        name="email_tutor"
                        type="email"
                        value="{{ old('email_tutor', $patient->email_tutor) }}"
                        class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    >
                    @error('email_tutor')
                        <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <!-- Domicilio -->
            <div>
                <label for="domicilio" class="block text-sm font-bold text-gray-700 mb-2">
                    Domicilio <span class="text-primary">*</span>
                </label>
                <input
                    id="domicilio"
                    name="domicilio"
                    type="text"
                    value="{{ old('domicilio', $patient->domicilio) }}"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    required
                >
                @error('domicilio')
                    <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                @enderror
            </div>

            <!-- Nota del paciente -->
            <div>
                <label for="nota_paciente" class="block text-sm font-bold text-gray-700 mb-2">
                    Nota del paciente
                </label>
                <textarea
                    id="nota_paciente"
                    name="nota_paciente"
                    rows="5"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    placeholder="Observaciones, alergias, condiciones especiales..."
                >{{ old('nota_paciente', $patient->nota_paciente) }}</textarea>
                @error('nota_paciente')
                    <p class="mt-1.5 text-sm text-primary">{{ $message }}</p>
                @enderror
            </div>

            <!-- Botones -->
            <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                <button type="submit" class="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Guardar cambios
                </button>
                <a href="{{ route('patients.show', $patient) }}" class="inline-flex items-center rounded-lg bg-gray-100 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
                    Cancelar
                </a>
            </div>
        </form>
    </div>
</div>
@endsection
