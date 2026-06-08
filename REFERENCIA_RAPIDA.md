# 🚀 Referencia Rápida - Sistema de Citas FCD

## Colores Oficiales
```
Primario (Rojo):  #ff1717  →  bg-primary, text-primary
Secundario (Verde): #89cc31  →  bg-secondary, text-secondary
```

## Roles
- **Admin:** Todo el acceso
- **Recepcionista:** Crear/editar citas, gestionar pagos
- **Terapeuta:** Solo sus citas, marcar como completadas, NO ve pagos

## Modelos Clave

### Appointment
```php
patient_id, therapist_id, date, time, description, diagnosis
status: 'pendiente' | 'completada' | 'cancelada'
payment_status: 'pagado' | 'no_pagado'
price (decimal)
```

### Patient
```php
nombre_paciente, edad, nombre_tutor, telefono_tutor,
email_tutor, domicilio, nota_paciente
```

### User
```php
role: 'admin' | 'recepcionista' | 'terapeuta'
tipo_terapeuta: 'fisico' | 'lenguaje' | 'ocupacional' | 'psicologico'
```

## Rutas Principales

```
GET  /admin/dashboard
GET  /recepcionista/dashboard
GET  /terapeuta/dashboard

GET  /patients                    - Lista pacientes
GET  /patients/{id}               - Ver paciente
GET  /patients/{id}/edit          - Editar paciente

GET  /admin/citas                 - Lista citas admin
GET  /recepcionista/citas         - Lista citas recepcionista
GET  /terapeuta/citas             - Mis citas (solo asignadas)

PATCH /admin/citas/{id}/payment   - Toggle pago
PATCH /recepcionista/citas/{id}/payment
PATCH /terapeuta/citas/{id}/complete  - Completar cita
```

## Snippets Útiles

### Badge de Estado
```blade
@if($status === 'pendiente')
    <span class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">
        Pendiente
    </span>
@elseif($status === 'completada')
    <span class="inline-flex rounded-full bg-secondary-light px-3 py-1 text-xs font-bold text-secondary-dark border border-secondary">
        Completada
    </span>
@endif
```

### Botón de Pago (Toggle)
```blade
@php $paymentStatus = $cita->payment_status ?? 'no_pagado'; @endphp
<form action="{{ route('admin.citas.payment', $cita) }}" method="POST" class="inline">
    @csrf @method('PATCH')
    <input type="hidden" name="payment_status" value="{{ $paymentStatus === 'pagado' ? 'no_pagado' : 'pagado' }}">
    <button type="submit" class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-all {{ $paymentStatus === 'pagado' ? 'bg-secondary-light text-secondary-dark border border-secondary hover:bg-secondary hover:text-white' : 'bg-primary-light text-primary-dark border border-primary hover:bg-primary hover:text-white' }}">
        {{ $paymentStatus === 'pagado' ? '✔ Pagado' : 'No pagado' }}
    </button>
</form>
```

### Formato Fechas
```php
\Carbon\Carbon::parse($cita->date)->format('d/m/Y')
\Carbon\Carbon::parse($cita->time)->format('H:i')
```

### Success Message
```blade
@if(session('success'))
    <div class="mb-6 bg-secondary-light border-l-4 border-secondary rounded-lg p-4 shadow-sm">
        <div class="flex items-center">
            <svg class="h-5 w-5 text-secondary-dark mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm font-medium text-secondary-dark">{{ session('success') }}</p>
        </div>
    </div>
@endif
```

### Input con Focus Ring
```blade
<input class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
```

### Botón Primario
```blade
<button class="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
    Texto
</button>
```

## Archivos Importantes

```
resources/views/layouts/app.blade.php          - Layout base
resources/views/admin/citas/index.blade.php    - Tabla admin
resources/views/recepcionista/citas/index.blade.php
resources/views/terapeuta/citas/index.blade.php
resources/views/patients/                      - Vistas pacientes
```

## Comandos Rápidos

```bash
php artisan serve                # Servidor
php artisan migrate              # Migraciones
php artisan cache:clear          # Limpiar caché
php artisan route:list           # Ver rutas
```

## Convenciones

- Variable `$c` para appointment en loops
- Todos los views extienden `layouts.app`
- Tailwind CSS vía CDN (no hay build process)
- Colores FCD siempre: primary (rojo) y secondary (verde)
- Payment status es independiente de appointment status
- Terapeutas NO ven columna de pagos

---
**Última actualización:** 2026-06-07
