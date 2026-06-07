<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PatientController extends Controller
{
    private function ensureCanEdit(Request $request): void
    {
        abort_unless($request->user()->isAdmin() || $request->user()->isRecepcionista(), 403);
    }

    public function index(Request $request)
    {
        $user = $request->user();
        $query = Patient::query()->withCount('appointments')->orderBy('nombre_paciente');
        $canSeePayments = $user->isAdmin() || $user->isRecepcionista();

        if ($canSeePayments) {
            $query->withSum([
                'appointments as pending_payments_sum' => fn (Builder $q) => $q->where('paid', false),
            ], 'price');
        }

        if ($user->isTerapeuta()) {
            $query->whereHas('appointments', function (Builder $q) use ($user) {
                $q->where('therapist_id', $user->id)
                  ->where('tipo_terapeuta', $user->tipo_terapeuta);
            });
        }

        if ($request->filled('search')) {
            $search = '%' . $request->search . '%';
            $query->where(function (Builder $q) use ($search) {
                $q->where('nombre_paciente', 'like', $search)
                  ->orWhere('email_tutor', 'like', $search)
                  ->orWhere('telefono_tutor', 'like', $search)
                  ->orWhere('nombre_tutor', 'like', $search);
            });
        }

        $patients = $query->paginate(12)->withQueryString();

        return view('patients.index', compact('patients', 'canSeePayments'));
    }

    public function search(Request $request)
    {
        abort_unless($request->user()->isAdmin() || $request->user()->isRecepcionista(), 403);

        $search = trim((string) $request->query('q', ''));
        $tipoTerapeuta = $request->query('tipo_terapeuta', '');

        $query = Patient::query();

        // Filtrar por búsqueda de nombre
        if (mb_strlen($search) >= 2) {
            $query->where('nombre_paciente', 'like', '%' . $search . '%');
        }

        // Filtrar por tipo de terapeuta
        if (!empty($tipoTerapeuta)) {
            $query->whereHas('appointments', function (Builder $q) use ($tipoTerapeuta) {
                $q->where('tipo_terapeuta', $tipoTerapeuta);
            });
        }

        // Si no hay búsqueda ni filtro, retornar lista inicial limitada
        if (mb_strlen($search) < 2 && empty($tipoTerapeuta)) {
            $query->limit(20);
        } else {
            $query->limit(50);
        }

        return $query
            ->orderBy('nombre_paciente')
            ->get()
            ->map(function (Patient $patient) {
                return [
                    'id' => $patient->id,
                    'name' => $patient->nombre_paciente,
                    'phone' => $patient->telefono_tutor,
                    'email' => $patient->email_tutor,
                    'patient_age' => $patient->edad,
                    'address' => $patient->domicilio,
                    'guardian_name' => $patient->nombre_tutor,
                ];
            });
    }

    public function show(Request $request, Patient $patient)
    {
        $user = $request->user();

        if ($user->isTerapeuta()) {
            $hasAccess = $patient->appointments()
                ->where('therapist_id', $user->id)
                ->where('tipo_terapeuta', $user->tipo_terapeuta)
                ->exists();

            abort_unless($hasAccess, 403);
        }

        $appointmentsQuery = $patient->appointments()
            ->with('therapist')
            ->orderByDesc('date')
            ->orderByDesc('time');

        if ($user->isTerapeuta()) {
            $appointmentsQuery->where('therapist_id', $user->id)
                ->where('tipo_terapeuta', $user->tipo_terapeuta);
        }

        $appointments = $appointmentsQuery->get();
        $canSeePayments = $user->isAdmin() || $user->isRecepcionista();
        $pendingPayments = $canSeePayments
            ? $patient->appointments()->where('paid', false)->sum('price')
            : null;

        return view('patients.show', compact(
            'patient',
            'appointments',
            'canSeePayments',
            'pendingPayments'
        ));
    }

    public function edit(Request $request, Patient $patient)
    {
        $this->ensureCanEdit($request);

        return view('patients.edit', compact('patient'));
    }

    public function update(Request $request, Patient $patient)
    {
        $this->ensureCanEdit($request);

        $validated = $request->validate([
            'nombre_paciente' => 'required|string|max:255',
            'edad' => 'required|integer|min:0|max:120',
            'nota_paciente' => 'nullable|string',
            'nombre_tutor' => 'required|string|max:255',
            'telefono_tutor' => [
                'required',
                'string',
                'max:30',
                Rule::unique('patients', 'telefono_tutor')->ignore($patient->id),
            ],
            'email_tutor' => [
                'nullable',
                'email',
                'max:255',
                Rule::unique('patients', 'email_tutor')->ignore($patient->id),
            ],
            'domicilio' => 'required|string|max:255',
        ]);

        $patient->update($validated);

        return redirect()->route('patients.show', $patient)
            ->with('success', 'Paciente actualizado correctamente.');
    }
}
