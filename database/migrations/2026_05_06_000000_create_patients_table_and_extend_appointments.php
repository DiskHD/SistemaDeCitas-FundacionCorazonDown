<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        Schema::table('appointments', function (Blueprint $table) {
            $table->foreignId('patient_id')
                ->nullable()
                ->after('id')
                ->constrained('patients')
                ->nullOnDelete();
            $table->string('tipo_terapeuta')->nullable()->after('therapist_id');
            $table->text('diagnosis')->nullable()->after('description');
            $table->decimal('price', 10, 2)->default(0)->after('diagnosis');
            $table->boolean('paid')->default(false)->after('price');
        });

        DB::table('appointments')
            ->join('users', 'appointments.therapist_id', '=', 'users.id')
            ->whereNotNull('users.tipo_terapeuta')
            ->update(['appointments.tipo_terapeuta' => DB::raw('users.tipo_terapeuta')]);

        DB::table('appointments')
            ->where('payment_status', 'pagado')
            ->update(['paid' => true]);

        DB::table('appointments')
            ->select('id', 'patient_name', 'phone', 'description')
            ->whereNull('patient_id')
            ->orderBy('id')
            ->get()
            ->each(function ($appointment) {
                if (!$appointment->patient_name) {
                    return;
                }

                $patientId = DB::table('patients')->insertGetId([
                    'name' => $appointment->patient_name,
                    'email' => null,
                    'phone' => $appointment->phone,
                    'notes' => $appointment->description,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                DB::table('appointments')
                    ->where('id', $appointment->id)
                    ->update(['patient_id' => $patientId]);
            });
    }

    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropConstrainedForeignId('patient_id');
            $table->dropColumn(['tipo_terapeuta', 'diagnosis', 'price', 'paid']);
        });

        Schema::dropIfExists('patients');
    }
};
