<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    // ─── Utilidad: todos los terapeutas ────────────────────────────────────────
    private function therapists()
    {
        return User::where('role', 'terapeuta')->orderBy('name')->get();
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // RECEPCIONISTA
    // ═══════════════════════════════════════════════════════════════════════════

    public function recepcionistaIndex()
    {
        $appointments = Appointment::with(['therapist', 'creator'])->latest()->get();
        return view('recepcionista.citas.index', compact('appointments'));
    }

    public function recepcionistaCreate()
    {
        $therapists = $this->therapists();
        return view('recepcionista.citas.create', compact('therapists'));
    }

    public function recepcionistaStore(Request $request)
    {
        $request->validate([
            'patient_name' => 'required|string|max:255',
            'therapist_id' => 'required|exists:users,id',
            'date'         => 'required|date|after_or_equal:today',
            'time'         => 'required',
            'description'  => 'nullable|string',
        ]);

        Appointment::create([
            'patient_name' => $request->patient_name,
            'therapist_id' => $request->therapist_id,
            'created_by'   => auth()->id(),
            'date'         => $request->date,
            'time'         => $request->time,
            'description'  => $request->description,
            'status'       => 'pendiente',
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
        $request->validate([
            'patient_name' => 'required|string|max:255',
            'therapist_id' => 'required|exists:users,id',
            'date'         => 'required|date|after_or_equal:today',
            'time'         => 'required',
            'description'  => 'nullable|string',
        ]);

        $appointment->update($request->only(['patient_name', 'therapist_id', 'date', 'time', 'description']));

        return redirect()->route('recepcionista.citas.index')
                         ->with('success', 'Cita actualizada exitosamente.');
    }

    public function recepcionistaCancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelada']);
        return redirect()->route('recepcionista.citas.index')
                         ->with('success', 'Cita cancelada.');
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // TERAPEUTA
    // ═══════════════════════════════════════════════════════════════════════════

    public function terapeutaIndex()
    {
        $appointments = Appointment::with(['therapist', 'creator'])
            ->where('therapist_id', auth()->id())
            ->latest()
            ->get();
        return view('terapeuta.citas.index', compact('appointments'));
    }

    public function terapeutaComplete(Appointment $appointment)
    {
        // Solo puede completar sus propias citas
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

    public function adminIndex()
    {
        $appointments = Appointment::with(['therapist', 'creator'])->latest()->get();
        return view('admin.citas.index', compact('appointments'));
    }

    public function adminEdit(Appointment $appointment)
    {
        $therapists = $this->therapists();
        return view('admin.citas.edit', compact('appointment', 'therapists'));
    }

    public function adminUpdate(Request $request, Appointment $appointment)
    {
        $request->validate([
            'patient_name' => 'required|string|max:255',
            'therapist_id' => 'required|exists:users,id',
            'date'         => 'required|date|after_or_equal:today',
            'time'         => 'required',
            'description'  => 'nullable|string',
        ]);

        $appointment->update($request->only(['patient_name', 'therapist_id', 'date', 'time', 'description']));

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

    public function adminDestroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('admin.citas.index')
                         ->with('success', 'Cita eliminada.');
    }
}
