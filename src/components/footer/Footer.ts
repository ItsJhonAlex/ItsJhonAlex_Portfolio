export const Footer = () => `
  <footer class="bg-gray-50 dark:bg-gray-900 py-12 mt-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Info -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            ItsJhonAlex
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Desarrollador Full Stack &<br>
            Bot Developer
          </p>
        </div>

        <!-- Links Rápidos -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Links Rápidos
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Social
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="https://github.com/ItsJhonAlex" 
                 target="_blank" 
                 class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <i class="ri-github-line"></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/itsjhonalex" 
                 target="_blank"
                 class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <i class="ri-linkedin-line"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ItsJhonAlex" 
                 target="_blank"
                 class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                <i class="ri-twitter-line"></i>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Contacto
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <i class="ri-mail-line"></i>
              <span>contact@itsjhonalex.dev</span>
            </li>
            <li class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <i class="ri-map-pin-line"></i>
              <span>Colombia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            &#169; ${new Date().getFullYear()} ItsJhonAlex. Todos los derechos reservados
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
              Política de Privacidad
            </a>
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`