import './styles/global.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'
import { ThemeManager } from './utils/theme'

class App {
  private container: HTMLElement

  constructor() {
    this.container = document.querySelector<HTMLDivElement>('#app')!
  }

  initTheme() {
    // Aplicar tema inicial
    ThemeManager.applyTheme(ThemeManager.getTheme())

    // Agregar event listener al botón de tema
    const themeToggle = document.getElementById('theme-toggle')
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        ThemeManager.toggle()
      })
    }
  }

  initScrollBehavior() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')
        const targetElement = document.querySelector(targetId!)
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  async render() {
    this.container.innerHTML = `
      ${Header()}
      <main>
        ${Home()}
        ${About()}
        ${Projects()}
        ${Contact()}
      </main>
      ${Footer()}
    `
    
    this.initScrollBehavior()
    this.initTheme()
  }
}

// Inicializar la aplicación
const app = new App()
document.addEventListener('DOMContentLoaded', () => app.render())