type Theme = 'light' | 'dark'

export const ThemeManager = {
  storageKey: 'theme-preference',

  getTheme(): Theme {
    if (typeof window === 'undefined') return 'light'
    
    // Verificar localStorage
    const storedTheme = localStorage.getItem(this.storageKey) as Theme
    if (storedTheme) return storedTheme

    // Verificar preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },

  setTheme(theme: Theme) {
    localStorage.setItem(this.storageKey, theme)
    this.applyTheme(theme)
  },

  applyTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  toggle() {
    const current = this.getTheme()
    const newTheme = current === 'light' ? 'dark' : 'light'
    this.setTheme(newTheme)
    return newTheme
  }
}