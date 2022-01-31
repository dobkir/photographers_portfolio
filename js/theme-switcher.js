import lightTheme from './theme-changes.js'
import { changeActiveButtonStyle } from './portfolio-galleries-switcher.js'

const themeSwitcher = document.querySelector('.theme-switcher')
const lightThemeFlag = themeSwitcher.classList.contains('theme-switcher-light')
const defaultTheme = 'dark'
const currentTheme = localStorage.getItem('theme') !== null ?
  localStorage.getItem('theme') :
  defaultTheme

window.addEventListener("unload", checkColorTheme())

function checkColorTheme() {
  if (currentTheme === 'dark' && lightThemeFlag) {
    toggleThemeParams()
  } else if (currentTheme === 'light' && !lightThemeFlag) {
    toggleThemeParams()
  }
}

function setLocalStorage(themeType) {
  localStorage.setItem('theme', themeType)
}

function toggleThemeParams() {
  const themeElementsArr = document.querySelectorAll('[data-theme]')

  themeElementsArr.forEach(element => {
    Object.entries(lightTheme).forEach(([key, value]) => {
      if (element.dataset.theme === key) {

        if (element.classList.contains(value)) {
          element.classList.remove(value)
        } else {
          element.classList.add(value)
        }
      }
    })
  })
}

function switchColorTheme(event) {
  const target = event.target

  if (target.classList.contains('theme-switcher-light')) {
    setLocalStorage('dark')
  } else {
    setLocalStorage('light')
  }

  toggleThemeParams()
  changeActiveButtonStyle()
}

themeSwitcher.addEventListener('click', switchColorTheme)
