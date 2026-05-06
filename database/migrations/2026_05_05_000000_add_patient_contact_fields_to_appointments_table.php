<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->unsignedTinyInteger('patient_age')->nullable()->after('patient_name');
            $table->string('address')->nullable()->after('patient_age');
            $table->string('phone', 30)->nullable()->after('address');
            $table->string('guardian_name')->nullable()->after('phone');
        });
    }

    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
            $table->dropColumn(['patient_age', 'address', 'phone', 'guardian_name']);
        });
    }
};
