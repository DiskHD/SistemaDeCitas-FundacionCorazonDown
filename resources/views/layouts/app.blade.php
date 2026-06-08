<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Citas Médicas') — Fundación Corazón Down</title>

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#ff1717',
                            dark: '#cc0000',
                            light: '#fff1f1',
                        },
                        secondary: {
                            DEFAULT: '#89cc31',
                            dark: '#6faa1f',
                            light: '#f3fae8',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            font-family: 'Inter', system-ui, sans-serif;
        }

        /* Animaciones suaves */
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-down {
            animation: slideDown 0.3s ease-out;
        }

        /* Sombras personalizadas */
        .shadow-primary {
            box-shadow: 0 4px 14px rgba(255, 23, 23, 0.15);
        }

        .shadow-secondary {
            box-shadow: 0 4px 14px rgba(137, 204, 49, 0.15);
        }

        /* Efectos hover mejorados */
        .hover-lift {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
    </style>

    @yield('styles')
</head>
<body class="bg-slate-50 text-gray-900 antialiased">
    <!-- Navbar -->
    <nav class="bg-primary shadow-primary sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo y marca -->
                <div class="flex items-center">
                    <a href="{{ route('patients.index') }}" class="flex items-center space-x-3 text-white hover:opacity-90 transition-opacity">
                        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full border-2 border-white border-opacity-40 flex items-center justify-center backdrop-blur-sm">
                            <span class="text-xl">❤️</span>
                        </div>
                        <div class="hidden sm:block">
                            <div class="text-lg font-bold tracking-tight">Fundación Corazón Down</div>
                            <div class="text-xs text-white text-opacity-80">Sistema de Citas</div>
                        </div>
                        <div class="sm:hidden">
                            <div class="text-sm font-bold">FCD</div>
                        </div>
                    </a>
                </div>

                @auth
                <!-- Navegación y usuario -->
                <div class="flex items-center space-x-2 sm:space-x-4">
                    <!-- Link Pacientes -->
                    <a href="{{ route('patients.index') }}" class="hidden md:flex items-center space-x-1 text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-semibold">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Pacientes</span>
                    </a>

                    <!-- Información del usuario -->
                    <div class="flex items-center space-x-2 bg-black bg-opacity-15 rounded-full px-3 py-1.5 border border-white border-opacity-20">
                        <div class="hidden sm:block text-right">
                            <div class="text-xs font-semibold text-white">{{ Auth::user()->name }}</div>
                            <div class="text-xs text-white text-opacity-70 capitalize">{{ Auth::user()->role }}</div>
                        </div>
                        <div class="w-8 h-8 bg-white bg-opacity-25 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white border-opacity-30">
                            {{ strtoupper(substr(Auth::user()->name, 0, 1)) }}
                        </div>
                    </div>

                    <!-- Botón logout -->
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="flex items-center space-x-1 bg-black bg-opacity-15 hover:bg-black hover:bg-opacity-25 text-white px-3 sm:px-4 py-2 rounded-lg transition-all text-sm font-semibold border border-white border-opacity-20">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span class="hidden sm:inline">Salir</span>
                        </button>
                    </form>
                </div>
                @endauth
            </div>
        </div>
    </nav>

    <!-- Contenido principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <!-- Alertas -->
        @if (session('success'))
            <div class="mb-6 bg-secondary-light border-l-4 border-secondary rounded-lg p-4 shadow-sm animate-slide-down">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-secondary-dark" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-secondary-dark">{{ session('success') }}</p>
                    </div>
                </div>
            </div>
        @endif

        @if (session('error'))
            <div class="mb-6 bg-primary-light border-l-4 border-primary rounded-lg p-4 shadow-sm animate-slide-down">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-primary-dark">{{ session('error') }}</p>
                    </div>
                </div>
            </div>
        @endif

        <!-- Contenido de las vistas -->
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="text-center text-sm text-gray-500">
                <p class="font-semibold text-gray-700">Fundación Corazón Down</p>
                <p class="mt-1">Sistema de Gestión de Citas Terapéuticas</p>
                <p class="mt-2 text-xs">© {{ date('Y') }} Todos los derechos reservados</p>
            </div>
        </div>
    </footer>

    @yield('scripts')
</body>
</html>
