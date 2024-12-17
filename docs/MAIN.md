# 🚀 Archivo Principal

```
/**
 * Punto de entrada principal de la aplicación
 * 
 * Responsabilidades:
 * - Inicialización de la aplicación
 * - Carga de componentes
 * - Manejo del estado inicial
 * 
 * @class App
 */
class App {
  private container: HTMLElement

  constructor() {
    this.container = document.querySelector<HTMLDivElement>('#app')!
  }

  async render() {
    // Renderiza los componentes principales
  }
}
```

## 📦 Inicialización

```
// Carga de estilos
import './styles/global.css'

// Carga de componentes
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './components/home/Home'

// Inicialización de la app
const app = new App()
document.addEventListener('DOMContentLoaded', () => app.render())
```
