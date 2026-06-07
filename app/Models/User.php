<?php

namespace App\Models;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'tipo_terapeuta',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
        ];
    }

    // ─── Relaciones de citas ──────────────────────────────────────────────────

    public function citasComoTerapeuta()
    {
        return $this->hasMany(Appointment::class, 'therapist_id');
    }

    public function citasCreadas()
    {
        return $this->hasMany(Appointment::class, 'created_by');
    }

    // ─── Helpers de rol ───────────────────────────────────────────────────────

    public function isAdmin(): bool
    {
        return $this->role === 'administrador';
    }

    public function isRecepcionista(): bool
    {
        return $this->role === 'recepcionista';
    }

    public function isTerapeuta(): bool
    {
        return $this->role === 'terapeuta';
    }

    public function tipoTerapeutaLabel(): ?string
    {
        return match ($this->tipo_terapeuta) {
            'psicologia' => 'Psicología',
            'terapia_fisica' => 'Terapia Física',
            'terapia_ocupacional' => 'Terapia Ocupacional',
            'lectoescritura' => 'Lectoescritura',
            'lenguaje' => 'Lenguaje',
            default => null,
        };
    }

    /**
     * Devuelve la ruta del dashboard según el rol.
     */
    public function dashboardRoute(): string
    {
        return match ($this->role) {
            'administrador'  => '/admin/dashboard',
            'recepcionista'  => '/recepcionista/dashboard',
            'terapeuta'      => '/terapeuta/dashboard',
            default          => '/',
        };
    }
}
