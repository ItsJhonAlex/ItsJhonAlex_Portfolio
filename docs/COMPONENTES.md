# 📦 Documentación de Componentes

## Header 

```typescript
// src/components/header/Header.ts
```

Componente Header - Barra de navegación principal
@returns {string} Template HTML del header

Características:
- Navegación responsive
- Menú móvil
- Selector de idioma
- Toggle tema oscuro

Clases Tailwind principales:
- fixed w-full: Fija el header al top
- bg-white dark:bg-gray-900: Manejo de tema claro/oscuro
- container mx-auto: Centrado y máximo ancho


## Footer

```typescript
// src/components/footer/Footer.ts
```

Componente Footer - Pie de página
@returns {string} Template HTML del footer

Características:
- Grid responsive de 4 columnas
- Links de navegación
- Redes sociales
- Información de contacto
- Copyright

Clases Tailwind principales:
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4: Layout responsive
- space-y-4: Espaciado vertical consistente
- hover:text-primary-600: Interacciones

## Home

```typescript
// src/components/home/Home.ts
```

Componente Home - Sección principal
@returns {string} Template HTML de la sección home

Características:
- Hero section
- Links sociales
- CTA principal
- Indicador de scroll

Clases Tailwind principales:
- pt-24 md:pt-32: Padding top responsivo
- grid grid-cols-1 lg:grid-cols-12: Layout grid
- text-4xl md:text-6xl: Tipografía responsiva