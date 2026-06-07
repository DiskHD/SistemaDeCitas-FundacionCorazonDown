<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Paso 1: Renombrar columnas existentes
        Schema::table('patients', function (Blueprint $table) {
            $table->renameColumn('name', 'nombre_paciente');
            $table->renameColumn('notes', 'nota_paciente');
            $table->renameColumn('phone', 'telefono_tutor');
            $table->renameColumn('email', 'email_tutor');
        });

        // Paso 2: Agregar nuevas columnas
        Schema::table('patients', function (Blueprint $table) {
            $table->unsignedTinyInteger('edad')->nullable()->after('nombre_paciente');
            $table->string('nombre_tutor')->nullable()->after('nota_paciente');
            $table->string('domicilio')->nullable()->after('nombre_tutor');
        });

        // Paso 3: Migrar datos de appointments a patients
        // Para cada paciente, obtener datos de su última cita
        $patients = DB::table('patients')->get();

        foreach ($patients as $patient) {
            $lastAppointment = DB::table('appointments')
                ->where('patient_id', $patient->id)
                ->orderBy('created_at', 'desc')
                ->first();

            if ($lastAppointment) {
                DB::table('patients')
                    ->where('id', $patient->id)
                    ->update([
                        'edad' => $lastAppointment->patient_age,
                        'nombre_tutor' => $lastAppointment->guardian_name,
                        'domicilio' => $lastAppointment->address,
                    ]);
            }
        }
    }

    public function down(): void
    {
        // Eliminar nuevas columnas
        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn(['edad', 'nombre_tutor', 'domicilio']);
        });

        // Renombrar columnas a sus nombres originales
        Schema::table('patients', function (Blueprint $table) {
            $table->renameColumn('nombre_paciente', 'name');
            $table->renameColumn('nota_paciente', 'notes');
            $table->renameColumn('telefono_tutor', 'phone');
            $table->renameColumn('email_tutor', 'email');
        });
    }
};
