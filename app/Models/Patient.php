<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_paciente',
        'edad',
        'nota_paciente',
        'nombre_tutor',
        'telefono_tutor',
        'email_tutor',
        'domicilio',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    // Accesor para compatibilidad (opcional, se puede eliminar después)
    public function getNameAttribute()
    {
        return $this->nombre_paciente;
    }

    public function getPhoneAttribute()
    {
        return $this->telefono_tutor;
    }

    public function getEmailAttribute()
    {
        return $this->email_tutor;
    }
}
