<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_name',
        'patient_id',
        'patient_age',
        'address',
        'phone',
        'guardian_name',
        'therapist_id',
        'tipo_terapeuta',
        'created_by',
        'date',
        'time',
        'description',
        'diagnosis',
        'price',
        'paid',
        'status',
        'payment_status',
    ];

    protected $casts = [
        'paid' => 'boolean',
        'price' => 'decimal:2',
    ];

    // ─── Relaciones ────────────────────────────────────────────────────────────

    public function therapist()
    {
        return $this->belongsTo(User::class, 'therapist_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
