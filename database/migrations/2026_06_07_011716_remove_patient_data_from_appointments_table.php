<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            // Eliminar campos obsoletos de paciente que ahora están en la tabla patients
            $table->dropColumn([
                'patient_name',
                'patient_age',
                'address',
                'phone',
                'guardian_name'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            // Restaurar campos para rollback
            $table->string('patient_name')->nullable()->after('patient_id');
            $table->unsignedTinyInteger('patient_age')->nullable()->after('patient_name');
            $table->string('address')->nullable()->after('patient_age');
            $table->string('phone', 20)->nullable()->after('address');
            $table->string('guardian_name')->nullable()->after('phone');
        });
    }
};
