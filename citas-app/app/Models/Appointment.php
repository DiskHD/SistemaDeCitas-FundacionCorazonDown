<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_name',
        'therapist_id',
        'created_by',
        'date',
        'time',
        'description',
        'status',
    ];

    // ─── Relaciones ────────────────────────────────────────────────────────────

    public function therapist()
    {
        return $this->belongsTo(User::class, 'therapist_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
