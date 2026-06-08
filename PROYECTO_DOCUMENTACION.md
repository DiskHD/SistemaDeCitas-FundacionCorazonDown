# Sistema de Citas - Fundación Corazón Down
**Documentación Técnica del Proyecto**

---

## 📋 Información General

- **Framework:** Laravel 10+
- **Frontend:** Blade Templates + Tailwind CSS 3.x (vía CDN)
- **Tipografía:** Google Fonts Inter
- **Base de datos:** MySQL/MariaDB
- **Propósito:** Sistema de gestión de citas para terapias en Fundación Corazón Down

---

## 🎨 Sistema de Diseño

### Colores Oficiales de la Marca

```css
/* Tailwind Config Personalizado */
primary: {
    DEFAULT: '#ff1717',  // Rojo principal
    dark: '#cc0000',     // Rojo oscuro
    light: '#fff1f1',    // Rojo muy claro
}
secondary: {
    DEFAULT: '#89cc31',  // Verde principal
    dark: '#6faa1f',     // Verde oscuro
    light: '#f3fae8',    // Verde muy claro
}
```

### Paleta de Colores por Estado

- **Pendiente:** Ámbar (`bg-amber-50`, `text-amber-700`, `border-amber-200`)
- **Completada:** Verde secundario (`bg-secondary-light`, `text-secondary-dark`, `border-secondary`)
- **Cancelada:** Gris (`bg-gray-100`, `text-gray-600`, `border-gray-200`)
- **Pagado:** Verde secundario (igual que completada)
- **No pagado:** Rojo primario (`bg-primary-light`, `text-primary-dark`, `border-primary`)

### Componentes de UI Estándar

#### Badge (Estado)
```blade
<span class="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200">
    Pendiente
</span>
```

#### Botón Primario
```blade
<button class="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark shadow-sm transition-all hover-lift">
    Texto
</button>
```

#### Botón Secundario
```blade
<button class="inline-flex items-center rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-white hover:bg-secondary-dark shadow-sm transition-all hover-lift">
    Texto
</button>
```

#### Input con Focus Ring
```blade
<input class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20">
```

#### Header de Tabla
```blade
<thead class="bg-primary">
    <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
            Columna
        </th>
    </tr>
</thead>
```

---

## 👥 Roles del Sistema

### 1. Admin
- **Acceso completo** a todo el sistema
- Puede ver, crear, editar, completar, cancelar y eliminar citas
- Gestiona pagos
- Ve todos los pacientes y terapeutas
- Dashboard con estadísticas globales

### 2. Recepcionista
- Puede crear y gestionar citas
- Gestiona pagos
- Edita y cancela citas pendientes
- Ve todos los pacientes
- Dashboard con estadísticas generales

### 3. Terapeuta
- **Solo ve sus propias citas** asignadas
- Puede marcar citas como completadas
- Ve solo pacientes asignados
- **No gestiona pagos**
- Dashboard personal con agenda

---

## 📊 Modelos Principales

### User (Usuarios/Terapeutas)
```php
// Campos principales
- name
- email
- role (admin, recepcionista, terapeuta)
- tipo_terapeuta (fisico, lenguaje, ocupacional, psicologico)

// Métodos útiles
- isAdmin()
- isRecepcionista()
- isTerapeuta()
- tipoTerapeutaLabel() // Retorna "Terapia Física", etc.
```

### Patient (Pacientes)
```php
// Campos principales
- nombre_paciente
- edad
- nombre_tutor
- telefono_tutor
- email_tutor (nullable)
- domicilio
- nota_paciente (nullable)

// Relaciones
- appointments() // hasMany
```

### Appointment (Citas)
```php
// Campos principales
- patient_id
- therapist_id
- date
- time
- description (nullable)
- diagnosis (nullable)
- status (pendiente, completada, cancelada)
- payment_status (pagado, no_pagado)
- price (decimal)

// Relaciones
- patient() // belongsTo
- therapist() // belongsTo User
```

---

## 🗂️ Estructura de Archivos Clave

### Layout Principal
- **`resources/views/layouts/app.blade.php`**
  - Extiende de aquí todas las vistas
  - Incluye Tailwind CSS vía CDN
  - Navbar responsivo con menús por rol
  - Sección @yield('content')
  - Sección @yield('scripts') para JS personalizado

### Dashboards
- **`resources/views/admin/dashboard.blade.php`** - Panel admin con gradiente rojo
- **`resources/views/recepcionista/dashboard.blade.php`** - Panel recepcionista con gradiente verde
- **`resources/views/terapeuta/dashboard.blade.php`** - Panel terapeuta con gradiente azul

### Vistas de Pacientes
- **`resources/views/patients/index.blade.php`** - Grid de tarjetas con búsqueda
- **`resources/views/patients/show.blade.php`** - Perfil + historial de citas
- **`resources/views/patients/edit.blade.php`** - Formulario de edición

### Tablas de Citas
- **`resources/views/admin/citas/index.blade.php`**
  - Tabla completa con todas las columnas
  - Filtros: búsqueda, terapeuta, fecha, estado, pago
  - Acciones: Editar, Completar, Cancelar, Eliminar

- **`resources/views/recepcionista/citas/index.blade.php`**
  - Muestra info detallada del paciente
  - Filtros: búsqueda, fecha, estado, pago
  - Acciones: Editar, Cancelar (solo pendientes)

- **`resources/views/terapeuta/citas/index.blade.php`**
  - Vista simplificada
  - Incluye columna "Descripción"
  - Sin columna de pago
  - Acción: Completar (solo pendientes)

---

## 🛣️ Rutas Importantes

### Autenticación
- `/login` - Login
- `/register` - Registro
- `/logout` - Logout (POST)

### Dashboards
- `/admin/dashboard` - Dashboard admin
- `/recepcionista/dashboard` - Dashboard recepcionista
- `/terapeuta/dashboard` - Dashboard terapeuta

### Pacientes (Compartido para todos los roles autorizados)
- `/patients` - Lista de pacientes
- `/patients/{id}` - Ver paciente
- `/patients/{id}/edit` - Editar paciente

### Citas - Admin
- `/admin/citas` - Lista de citas
- `/admin/citas/{id}/edit` - Editar cita
- `PATCH /admin/citas/{id}/complete` - Completar cita
- `PATCH /admin/citas/{id}/cancel` - Cancelar cita
- `DELETE /admin/citas/{id}` - Eliminar cita
- `PATCH /admin/citas/{id}/payment` - Toggle pago

### Citas - Recepcionista
- `/recepcionista/citas` - Lista de citas
- `/recepcionista/citas/create` - Nueva cita
- `/recepcionista/citas/{id}/edit` - Editar cita
- `PATCH /recepcionista/citas/{id}/cancel` - Cancelar cita
- `PATCH /recepcionista/citas/{id}/payment` - Toggle pago

### Citas - Terapeuta
- `/terapeuta/citas` - Mis citas (solo asignadas)
- `PATCH /terapeuta/citas/{id}/complete` - Completar cita

---

## 🔧 Funcionalidades Clave

### 1. Toggle de Pago (Admin y Recepcionista)

**Ubicación:** Columna "Pago" en tablas de citas

```blade
<form action="{{ route('admin.citas.payment', $cita) }}" method="POST" class="inline">
    @csrf
    @method('PATCH')
    <input type="hidden" name="payment_status" value="{{ $paymentStatus === 'pagado' ? 'no_pagado' : 'pagado' }}">
    <button type="submit" class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-all {{ $paymentStatus === 'pagado' ? 'bg-secondary-light text-secondary-dark border border-secondary hover:bg-secondary hover:text-white' : 'bg-primary-light text-primary-dark border border-primary hover:bg-primary hover:text-white' }}">
        @if($paymentStatus === 'pagado')
            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Pagado
        @else
            No pagado
        @endif
    </button>
</form>
```

**Controlador:**
```php
public function updatePayment(Request $request, Appointment $appointment)
{
    $request->validate([
        'payment_status' => 'required|in:pagado,no_pagado'
    ]);

    $appointment->update([
        'payment_status' => $request->payment_status
    ]);

    return back()->with('success', 'Estado de pago actualizado');
}
```

### 2. Filtros en Tablas de Citas

Todos los filtros usan **GET** con parámetros query:
- `?search=nombre` - Busca en nombre paciente, tutor, teléfono
- `?date=2024-01-15` - Filtra por fecha
- `?status=pendiente` - Filtra por estado
- `?payment_status=pagado` - Filtra por pago (no disponible para terapeuta)
- `?therapist_id=5` - Filtra por terapeuta (solo admin)

### 3. Cálculo de Pagos Pendientes

En vistas de pacientes:
```php
// Controller
$pendingPayments = $patient->appointments()
    ->where('payment_status', 'no_pagado')
    ->sum('price');

// Blade
<span>${{ number_format($pendingPayments, 2) }}</span>
```

### 4. Cards Interactivos (Dashboards)

```javascript
// Script para expandir/colapsar cards
function toggleCard(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}
```

```blade
<div class="cursor-pointer" onclick="toggleCard('card-hoy')">
    <!-- Header del card -->
</div>
<div id="card-hoy" class="hidden">
    <!-- Contenido expandible -->
</div>
```

---

## 📝 Convenciones de Código

### Blade Templates
- Usar `@extends('layouts.app')` en todas las vistas
- Siempre definir `@section('title', 'Título')`
- Comentarios HTML para secciones: `<!-- Header -->`
- Clases Tailwind en orden: layout → spacing → sizing → colors → typography → effects

### Nombres de Variables
- `$c` para appointment en loops (consistente en todo el proyecto)
- `$patient` para modelo Patient
- `$paymentStatus` para estado de pago calculado

### Formato de Fechas
```php
// Fecha
\Carbon\Carbon::parse($cita->date)->format('d/m/Y')

// Hora
\Carbon\Carbon::parse($cita->time)->format('H:i')
```

### Mensajes de Éxito
```php
return redirect()->back()->with('success', 'Mensaje aquí');
```

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

---

## 🔒 Permisos y Seguridad

### Middleware por Rol
```php
// routes/web.php
Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function() {
    // Rutas admin
});

Route::middleware(['auth', 'role:recepcionista'])->prefix('recepcionista')->group(function() {
    // Rutas recepcionista
});

Route::middleware(['auth', 'role:terapeuta'])->prefix('terapeuta')->group(function() {
    // Rutas terapeuta
});
```

### Vistas Condicionales
```blade
@if(auth()->user()->isAdmin())
    <!-- Solo admin ve esto -->
@endif

@if(auth()->user()->isAdmin() || auth()->user()->isRecepcionista())
    <!-- Admin y recepcionista ven esto -->
@endif
```

---

## 🗃️ Migraciones Importantes

### Tabla `users`
```php
- tipo_terapeuta (enum: fisico, lenguaje, ocupacional, psicologico) nullable
```

### Tabla `patients`
```php
- nombre_paciente (string)
- edad (integer)
- nombre_tutor (string)
- telefono_tutor (string)
- email_tutor (string) nullable
- domicilio (string)
- nota_paciente (text) nullable
```

### Tabla `appointments`
```php
- patient_id (foreignId)
- therapist_id (foreignId) // user_id
- date (date)
- time (time)
- description (text) nullable
- diagnosis (string) nullable
- status (enum: pendiente, completada, cancelada)
- payment_status (enum: pagado, no_pagado)
- price (decimal 8,2)
```

---

## 🎯 Cambios Recientes (Última Sesión)

### Rediseño Completo a Tailwind CSS
**Fecha:** 2026-06-07

**Archivos convertidos:**
1. ✅ `layouts/app.blade.php` - Layout base con Tailwind
2. ✅ `admin/dashboard.blade.php` - Dashboard con gradiente rojo
3. ✅ `recepcionista/dashboard.blade.php` - Dashboard con gradiente verde
4. ✅ `terapeuta/dashboard.blade.php` - Dashboard con gradiente azul
5. ✅ `patients/index.blade.php` - Grid de tarjetas
6. ✅ `patients/show.blade.php` - Perfil + historial
7. ✅ `patients/edit.blade.php` - Formulario de edición
8. ✅ `admin/citas/index.blade.php` - Tabla completa admin
9. ✅ `recepcionista/citas/index.blade.php` - Tabla recepcionista
10. ✅ `terapeuta/citas/index.blade.php` - Tabla terapeuta

**Cambios clave:**
- Eliminado todo CSS personalizado en `<style>` tags
- Implementado Tailwind CSS 3.x vía CDN
- Colores oficiales FCD (#ff1717, #89cc31)
- Botón de pago movido a columna "Pago" (antes estaba en Acciones)
- Diseño responsive mobile-first
- Componentes reutilizables con clases Tailwind
- Tipografía Inter de Google Fonts

---

## 📚 Patrones de Código Comunes

### Empty State (Sin Resultados)
```blade
@if($collection->isEmpty())
    <div class="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">No hay resultados</h3>
        <p class="text-gray-500 mb-4">Descripción del problema.</p>
        <a href="#" class="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-all">
            Acción
        </a>
    </div>
@endif
```

### Confirmación antes de Acción
```blade
<form method="POST" onsubmit="return confirm('¿Estás seguro?')">
    @csrf
    @method('DELETE')
    <button type="submit">Eliminar</button>
</form>
```

### Paginación
```blade
@if($collection->hasPages())
    <div class="mt-6">
        {{ $collection->links() }}
    </div>
@endif
```

---

## 🚀 Comandos Útiles

```bash
# Servir aplicación
php artisan serve

# Limpiar caché
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Migraciones
php artisan migrate
php artisan migrate:fresh --seed

# Crear controlador
php artisan make:controller NombreController

# Crear modelo con migración
php artisan make:model NombreModelo -m

# Ver rutas
php artisan route:list
```

---

## ⚠️ Notas Importantes

1. **No modificar base de datos sin migración** - Siempre usar `php artisan make:migration`
2. **Payment status es independiente de appointment status** - Una cita puede estar completada pero no pagada
3. **Terapeutas solo ven sus propias citas** - Filtro aplicado en controller
4. **Precio por defecto de citas:** Definir en controller o formulario
5. **Validaciones están en controllers** - No hay Form Requests todavía
6. **Tailwind vía CDN** - No hay proceso de build, cambios son instantáneos

---

## 📞 Contacto y Recursos

- **Framework:** [Laravel Documentation](https://laravel.com/docs)
- **Tailwind CSS:** [Tailwind Docs](https://tailwindcss.com/docs)
- **Iconos:** SVG inline (Heroicons style)
- **Fonts:** Google Fonts (Inter)

---

**Última actualización:** 2026-06-07
**Versión del documento:** 1.0
**Estado del proyecto:** Rediseño completo finalizado ✅
