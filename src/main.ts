import './styles/global.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './components/home/Home'

class App {
  private container: HTMLElement

  constructor() {
    this.container = document.querySelector<HTMLDivElement>('#app')!
  }

  async render() {
    this.container.innerHTML = `
      ${Header()}
      <main class="main-content">
        ${Home()}
      </main>
      ${Footer()}
    `
  }
}

// Inicializar la aplicación
const app = new App()
document.addEventListener('DOMContentLoaded', () => app.render())
