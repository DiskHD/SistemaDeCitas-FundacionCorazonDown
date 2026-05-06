<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Crea el usuario administrador por defecto.
     * Las credenciales se pueden cambiar o mover a .env en producción.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@citas.com'],
            [
                'name'     => 'Administrador',
                'email'    => 'admin@citas.com',
                'password' => Hash::make('password'),
                'role'     => 'administrador',
            ]
        );
    }
}
