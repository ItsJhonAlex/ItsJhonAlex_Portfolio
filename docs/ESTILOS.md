# 🎨 Sistema de Estilos

```
 // tailwind.config.js

/**
 * Configuración principal de Tailwind CSS
 * 
 * Características:
 * - Tema personalizado
 * - Colores de marca
 * - Plugins adicionales
 * - Modo oscuro
 */
```

## 🔧 Variables y Tokens

```
/* Colores principales */
primary: {
  50:  '#f0f9ff',
  100: '#e0f2fe',
  // ...
  900: '#0c4a6e',
}

/* Tipografía */
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}

/* Espaciado */
container: {
  center: true,
  padding: '1rem',
}
```

## 📦 Clases Util   itarias

```
/* Botones */
.btn {
  @apply inline-flex items-center px-4 py-2 rounded-md;
}

/* Secciones */
.section {
  @apply py-16 md:py-24;
}

/* Contenedores */
.container {
  @apply max-w-7xl mx-auto px-4;
}
```