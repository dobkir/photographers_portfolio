import i18Obj from './translation.js'

const languageSwitcher = document.querySelector('.language-switcher')
const switcherEnglish = document.querySelector('.language-switcher_en')
const switcherRussian = document.querySelector('.language-switcher_ru')
const switchersArr = [switcherEnglish, switcherRussian]
const defaultLanguage = 'en'
const currentLanguage = localStorage.getItem('language') !== null ?
  localStorage.getItem('language') :
  defaultLanguage

window.addEventListener("unload", getTranslate(currentLanguage))

function changeActiveLanguageLink(language) {
  let regexp = new RegExp(`_${language}`)

  switchersArr.forEach(switcher => {
    if (!regexp.test(switcher.classList)) {
      if (switcher.classList.contains('active-link')) {
        switcher.classList.remove('active-link')
      }
    } else {
      if (!switcher.classList.contains('active-link')) {
        switcher.classList.add('active-link')
      }
    }
  })
}


function getTranslate(language) {
  const wordsForTranslationArr = document.querySelectorAll('[data-i18]')

  wordsForTranslationArr.forEach(word => {
    Object.entries(i18Obj[language]).forEach(([key, value]) => {
      if (word.dataset.i18 === key) {
        word.textContent = value
        if (word.placeholder) {
          word.placeholder = value
          word.value = ''
        }
      }
    })
  })

  changeActiveLanguageLink(language)
}


function manualSwitchLanguage(event) {
  const target = event.target

  if (target === switcherEnglish) {
    getTranslate('en')
    localStorage.setItem('language', 'en')
  } else if (target === switcherRussian) {
    getTranslate('ru')
    localStorage.setItem('language', 'ru')
  }
}

languageSwitcher.addEventListener('click', manualSwitchLanguage)
