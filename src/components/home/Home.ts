export const Home = () => `
  <section id="home" class="section pt-24 md:pt-32">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Social links -->
        <div class="hidden lg:flex lg:col-span-1 flex-col space-y-6">
          <a href="https://github.com/ItsJhonAlex" target="_blank" 
             class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
            <i class="ri-github-line text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/itsjhonalex" target="_blank"
             class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
            <i class="ri-linkedin-line text-2xl"></i>
          </a>
          <a href="https://twitter.com/ItsJhonAlex" target="_blank"
             class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
            <i class="ri-twitter-line text-2xl"></i>
          </a>
        </div>

        <!-- Content -->
        <div class="lg:col-span-11 space-y-6 text-center lg:text-left">
          <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Hola, Soy ItsJhonAlex
          </h1>
          <h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Desarrollador Full Stack
          </h2>
          <p class="max-w-2xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400">
            Experiencia en desarrollo web y creación de bots, apasionado por crear soluciones innovadoras.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" class="btn">
              Contáctame
            </a>
            <a href="#projects" class="btn bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hidden lg:flex justify-center mt-16">
        <a href="#about" class="animate-bounce text-primary-600 dark:text-primary-500 flex flex-col items-center">
          <i class="ri-mouse-line text-2xl"></i>
          <span class="text-sm">Scroll down</span>
          <i class="ri-arrow-down-line text-xl"></i>
        </a>
      </div>
    </div>
  </section>
` 