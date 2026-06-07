<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AppointmentController extends Controller
{
    // ─── Utilidad: todos los terapeutas ────────────────────────────────────────
    private function therapists()
    {
        return User::where('role', 'terapeuta')->orderBy('name')->get();
    }

    // ─── Utilidad: aplicar filtros comunes a una query ─────────────────────────
    private function applyFilters($query, Request $request)
    {
        if ($request->filled('search')) {
            $search = '%' . $request->search . '%';
            $query->where(function ($q) use ($search) {
                $q->whereHas('patient', fn ($patient) => $patient->where('nombre_paciente', 'like', $search)
                                                                  ->orWhere('nombre_tutor', 'like', $search)
                                                                  ->orWhere('telefono_tutor', 'like', $search));
            });
        }
        if ($request->filled('date')) {
            $query->whereDate('date', $request->date);
        }
        if ($request->filled('status') && in_array($request->status, ['pendiente', 'completada', 'cancelada'])) {
            $query->where('status', $request->status);
        }
        if ($request->filled('payment_status') && in_array($request->payment_status, ['no_pagado', 'pagado'])) {
            $query->where('payment_status', $request->payment_status);
        }
        return $query;
    }

    private function updatePaymentStatus(Request $request, Appointment $appointment, string $redirectRoute)
    {
        $validated = $request->validate([
            'payment_status' => 'required|in:no_pagado,pagado',
        ]);

        $appointment->update([
            ...$validated,
            'paid' => $validated['payment_status'] === 'pagado',
        ]);

        return redirect()->route($redirectRoute)
                         ->with('success', 'Estado de pago actualizado.');
    }

    private function appointmentRules(bool $paymentRequired = true, bool $includeDiagnosis = true): array
    {
        $rules = [
            'patient_id' => 'required|exists:patients,id',
            'patient_age'  => 'required|integer|min:0|max:120',
            'address'      => 'required|string|max:255',
            'phone'        => 'required|string|max:30',
            'guardian_name' => 'required|string|max:255',
            'therapist_id' => 'required|exists:users,id',
            'date'         => 'required|date|after_or_equal:today',
            'time'         => 'required',
            'description'  => 'nullable|string',
            'price'        => 'required|numeric|min:0|max:999999.99',
            'paid'         => 'nullable|boolean',
            'payment_status' => ($paymentRequired ? 'required' : 'nullable') . '|in:no_pagado,pagado',
        ];

        $rules['diagnosis'] = $includeDiagnosis ? 'nullable|string' : 'prohibited';

        return $rules;
    }

    private function createAppointmentRules(): array
    {
        return [
            'patient_mode' => ['required', Rule::in(['existing', 'new'])],
            'patient_id' => 'required_if:patient_mode,existing|nullable|exists:patients,id',
            // Campos para nuevo paciente
            'nombre_paciente' => 'required_if:patient_mode,new|nullable|string|max:255',
            'edad' => 'required_if:patient_mode,new|nullable|integer|min:0|max:120',
            'nota_paciente' => 'nullable|string',
            'nombre_tutor' => 'required_if:patient_mode,new|nullable|string|max:255',
            'telefono_tutor' => 'required_if:patient_mode,new|nullable|string|max:30',
            'email_tutor' => 'nullable|email|max:255',
            'domicilio' => 'required_if:patient_mode,new|nullable|string|max:255',
            // Campos de la cita
            'therapist_id' => 'required|exists:users,id',
            'date'         => 'required|date|after_or_equal:today',
            'time'         => 'required',
            'description'  => 'nullable|string',
            'diagnosis'    => 'prohibited',
            'price'        => 'required|numeric|min:0|max:999999.99',
            'paid'         => 'nullable|boolean',
            'payment_status' => 'nullable|in:no_pagado,pagado',
        ];
    }

    private function appointmentFields(): array
    {
        return [
            'patient_id',
            'patient_age',
            'address',
            'phone',
            'guardian_name',
            'therapist_id',
            'date',
            'time',
            'description',
            'diagnosis',
            'price',
            'paid',
            'payment_status',
        ];
    }

    private function patientFromAppointmentRequest(array $validated): Patient
    {
        if (($validated['patient_mode'] ?? 'existing') === 'existing') {
            return Patient::findOrFail($validated['patient_id']);
        }

        $query = Patient::query();

        if (!empty($validated['email_tutor'])) {
            $query->orWhere('email_tutor', $validated['email_tutor']);
        }

        if (!empty($validated['telefono_tutor'])) {
            $query->orWhere('telefono_tutor', $validated['telefono_tutor']);
        }

        $query->orWhere(function ($q) use ($validated) {
            $q->where('nombre_paciente', $validated['nombre_paciente']);

            if (!empty($validated['telefono_tutor'])) {
                $q->where('telefono_tutor', $validated['telefono_tutor']);
            }
        });

        if ($query->exists()) {
            throw ValidationException::withMessages([
                'nombre_paciente' => 'Ya existe un paciente con esos datos. Seleccionalo desde el buscador.',
            ]);
        }

        return Patient::create([
            'nombre_paciente' => $validated['nombre_paciente'],
            'edad' => $validated['edad'],
            'nota_paciente' => $validated['nota_paciente'] ?? null,
            'nombre_tutor' => $validated['nombre_tutor'],
            'telefono_tutor' => $validated['telefono_tutor'],
            'email_tutor' => $validated['email_tutor'] ?? null,
            'domicilio' => $validated['domicilio'],
        ]);
    }

    private function appointmentPayload(array $validated, Patient $patient): array
    {
        return [
            'patient_id' => $patient->id,
            'therapist_id' => $validated['therapist_id'],
            'tipo_terapeuta' => $this->therapistTypeFor((int) $validated['therapist_id']),
            'date' => $validated['date'],
            'time' => $validated['time'],
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'] ?? 0,
            'payment_status' => $validated['payment_status'] ?? 'no_pagado',
            'paid' => ($validated['payment_status'] ?? 'no_pagado') === 'pagado' || (bool) ($validated['paid'] ?? false),
        ];
    }

    private function therapistTypeFor(int $therapistId): ?string
    {
        return User::whereKey($therapistId)->value('tipo_terapeuta');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // DASHBOARDS
    // ═══════════════════════════════════════════════════════════════════════════

    public function adminDashboard()
    {
        $today = now()->toDateString();
        $stats = [
            'total'        => Appointment::count(),
            'hoy'          => Appointment::whereDate('date', $today)->count(),
            'pendientes'   => Appointment::where('status', 'pendiente')->count(),
            'completadas'  => Appointment::where('status', 'completada')->count(),
            'canceladas'   => Appointment::where('status', 'cancelada')->count(),
            'terapeutas'   => User::where('role', 'terapeuta')->count(),
            'recepcionistas' => User::where('role', 'recepcionista')->count(),
            // Últimas 5 citas de hoy
            'citas_hoy'    => Appointment::with(['patient', 'therapist'])
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            // Últimas 5 citas pendientes
            'citas_pendientes' => Appointment::with(['patient', 'therapist'])
                                ->where('status', 'pendiente')
                                ->orderBy('date')
                                ->limit(5)
                                ->get(),
        ];
        return view('admin.dashboard', compact('stats'));
    }

    public function recepcionistaDashboard()
    {
        $today = now()->toDateString();
        $stats = [
            'hoy'        => Appointment::whereDate('date', $today)->count(),
            'pendientes' => Appointment::where('status', 'pendiente')->count(),
            'completadas'=> Appointment::where('status', 'completada')->count(),
            'canceladas' => Appointment::where('status', 'cancelada')->count(),
            // Próximas citas del día con detalle
            'citas_hoy'  => Appointment::with(['patient', 'therapist'])
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            // Próximas citas pendientes
            'proximas'   => Appointment::with(['patient', 'therapist'])
                                ->where('status', 'pendiente')
                                ->where('date', '>=', $today)
                                ->orderBy('date')->orderBy('time')
                                ->limit(5)
                                ->get(),
        ];
        return view('recepcionista.dashboard', compact('stats'));
    }

    public function terapeutaDashboard()
    {
        $id    = auth()->id();
        $today = now()->toDateString();
        $stats = [
            'hoy'        => Appointment::where('therapist_id', $id)->whereDate('date', $today)->count(),
            'pendientes' => Appointment::where('therapist_id', $id)->where('status', 'pendiente')->count(),
            'completadas'=> Appointment::where('therapist_id', $id)->where('status', 'completada')->count(),
            'total'      => Appointment::where('therapist_id', $id)->count(),
            // Próximas citas del terapeuta
            'citas_hoy'  => Appointment::with('patient')
                                ->where('therapist_id', $id)
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            'proximas'   => Appointment::with('patient')
                                ->where('therapist_id', $id)
                                ->where('status', 'pendiente')
                                ->where('date', '>=', $today)
                                ->orderBy('date')->orderBy('time')
                                ->limit(5)
                                ->get(),
        ];
        return view('terapeuta.dashboard', compact('stats'));
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // RECEPCIONISTA
    // ═══════════════════════════════════════════════════════════════════════════

    public function recepcionistaIndex(Request $request)
    {
        $query = Appointment::with(['patient', 'therapist', 'creator'])->latest('date');
        $this->applyFilters($query, $request);
        $appointments = $query->paginate(10)->withQueryString();
        return view('recepcionista.citas.index', compact('appointments'));
    }

    public function recepcionistaCreate()
    {
        $therapists = $this->therapists();
        return view('recepcionista.citas.create', compact('therapists'));
    }

    public function recepcionistaStore(Request $request)
    {
        $validated = $request->validate($this->createAppointmentRules());
        $patient = $this->patientFromAppointmentRequest($validated);

        Appointment::create([
            ...$this->appointmentPayload($validated, $patient),
            'created_by' => auth()->id(),
            'status' => 'pendiente',
        ]);

        return redirect()->route('recepcionista.citas.index')
                         ->with('success', 'Cita creada exitosamente.');
    }

    public function recepcionistaEdit(Appointment $appointment)
    {
        $therapists = $this->therapists();
        return view('recepcionista.citas.edit', compact('appointment', 'therapists'));
    }

    public function recepcionistaUpdate(Request $request, Appointment $appointment)
    {
        $request->validate($this->appointmentRules());
        $validated = $request->only($this->appointmentFields());
        $patient = Patient::findOrFail($validated['patient_id']);

        $appointment->update([
            ...$this->appointmentPayload($validated, $patient),
            'diagnosis' => $validated['diagnosis'] ?? null,
        ]);

        return redirect()->route('recepcionista.citas.index')
                         ->with('success', 'Cita actualizada exitosamente.');
    }

    public function recepcionistaCancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelada']);
        return redirect()->route('recepcionista.citas.index')
                         ->with('success', 'Cita cancelada.');
    }

    public function recepcionistaPayment(Request $request, Appointment $appointment)
    {
        return $this->updatePaymentStatus($request, $appointment, 'recepcionista.citas.index');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // TERAPEUTA
    // ═══════════════════════════════════════════════════════════════════════════

    public function terapeutaIndex(Request $request)
    {
        $query = Appointment::with(['patient', 'therapist', 'creator'])
            ->where('therapist_id', auth()->id())
            ->latest('date');
        $this->applyFilters($query, $request);
        $appointments = $query->paginate(10)->withQueryString();
        return view('terapeuta.citas.index', compact('appointments'));
    }

    public function terapeutaComplete(Appointment $appointment)
    {
        if ($appointment->therapist_id !== auth()->id()) {
            abort(403);
        }
        $appointment->update(['status' => 'completada']);
        return redirect()->route('terapeuta.citas.index')
                         ->with('success', 'Cita marcada como completada.');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // ADMINISTRADOR
    // ═══════════════════════════════════════════════════════════════════════════

    public function adminIndex(Request $request)
    {
        $query = Appointment::with(['patient', 'therapist', 'creator'])->latest('date');
        $this->applyFilters($query, $request);
        $appointments = $query->paginate(10)->withQueryString();
        return view('admin.citas.index', compact('appointments'));
    }

    public function adminEdit(Appointment $appointment)
    {
        $therapists = $this->therapists();
        return view('admin.citas.edit', compact('appointment', 'therapists'));
    }

    public function adminUpdate(Request $request, Appointment $appointment)
    {
        $request->validate($this->appointmentRules());
        $validated = $request->only($this->appointmentFields());
        $patient = Patient::findOrFail($validated['patient_id']);

        $appointment->update([
            ...$this->appointmentPayload($validated, $patient),
            'diagnosis' => $validated['diagnosis'] ?? null,
        ]);

        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita actualizada exitosamente.');
    }

    public function adminCancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelada']);
        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita cancelada.');
    }

    public function adminComplete(Appointment $appointment)
    {
        $appointment->update(['status' => 'completada']);
        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita marcada como completada.');
    }

    public function adminPayment(Request $request, Appointment $appointment)
    {
        return $this->updatePaymentStatus($request, $appointment, 'admin.citas.index');
    }

    public function adminDestroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita eliminada.');
    }
}
