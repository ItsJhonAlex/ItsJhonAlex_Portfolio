export const Header = () => `
  <header class="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
    <nav class="container mx-auto px-4 h-16">
      <div class="flex justify-between items-center h-full">
        <a href="#" class="text-2xl font-bold text-primary-600">
          ItsJhonAlex
        </a>

        <!-- Menú desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="nav-link">Inicio</a>
          <a href="#about" class="nav-link">Sobre mí</a>
          <a href="#projects" class="nav-link">Proyectos</a>
          <a href="#contact" class="nav-link">Contacto</a>
          
          <div class="flex items-center space-x-4">
            <select class="form-select rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            
            <button class="theme-toggle p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              🌙
            </button>
          </div>
        </div>

        <!-- Botón menú móvil -->
        <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Menú móvil -->
      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" class="nav-link-mobile">Inicio</a>
          <a href="#about" class="nav-link-mobile">Sobre mí</a>
          <a href="#projects" class="nav-link-mobile">Proyectos</a>
          <a href="#contact" class="nav-link-mobile">Contacto</a>
        </div>
      </div>
    </nav>
  </header>
`

