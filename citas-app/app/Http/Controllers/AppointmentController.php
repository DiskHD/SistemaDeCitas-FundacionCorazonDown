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

    // ─── Utilidad: aplicar filtros comunes a una query ─────────────────────────
    private function applyFilters($query, Request $request)
    {
        if ($request->filled('search')) {
            $query->where('patient_name', 'like', '%' . $request->search . '%');
        }
        if ($request->filled('date')) {
            $query->whereDate('date', $request->date);
        }
        if ($request->filled('status') && in_array($request->status, ['pendiente', 'completada', 'cancelada'])) {
            $query->where('status', $request->status);
        }
        return $query;
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
            'citas_hoy'    => Appointment::with('therapist')
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            // Últimas 5 citas pendientes
            'citas_pendientes' => Appointment::with('therapist')
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
            'citas_hoy'  => Appointment::with('therapist')
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            // Próximas citas pendientes
            'proximas'   => Appointment::with('therapist')
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
            'citas_hoy'  => Appointment::where('therapist_id', $id)
                                ->whereDate('date', $today)
                                ->orderBy('time')
                                ->limit(5)
                                ->get(),
            'proximas'   => Appointment::where('therapist_id', $id)
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
        $query = Appointment::with(['therapist', 'creator'])->latest('date');
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

    public function terapeutaIndex(Request $request)
    {
        $query = Appointment::with(['therapist', 'creator'])
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
        $query = Appointment::with(['therapist', 'creator'])->latest('date');
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
