import gallerySeasons from "./gallery-seasons.js"

// =================================== Portfolio galleries switcher =================================== //

const portfolioButtonsArr = document.querySelectorAll('.button_portfolio')
const portfolioImagesArr = document.querySelectorAll('.gallery-image')
const galleriesList = document.querySelector('.galleries-list')
const randomSeason = Math.floor(Math.random() * gallerySeasons.length)



function changeActiveButtonStyle() {
  const buttonsPortfolioArr = document.querySelectorAll('[data-season]')

  buttonsPortfolioArr.forEach(button => {

    portfolioImagesArr.forEach(img => {
      const pathArr = img.src.split("/")
      const fileDirectory = pathArr[pathArr.length - 2]

      if (button.dataset.season === fileDirectory) {
        if (button.classList.contains('button_colored-light')) {
          button.classList.contains('button_active') && button.classList.remove('button_active')
          button.classList.add('button_colored-light_active')
        } else {
          button.classList.contains('button_colored-light_active') && button.classList.remove('button_colored-light_active')
          button.classList.add('button_active')
        }
      }

    })

  })

}

function switchPortfolioGallery() {

  function showGallery(season) {
    portfolioImagesArr.forEach((img, index) => {
      img.src = `./assets/img/${season}/${index + 1}.jpg`
    })
  }

  function showDefaultGallery() {
    showGallery(gallerySeasons[randomSeason])
    changeActiveButtonStyle()
  }

  function switchGallery(event) {
    const target = event.target

    if (target.classList.contains('button_portfolio')) {
      const currentSeason = target.dataset.season

      portfolioButtonsArr.forEach(button => {
        button.classList.remove('button_active')
        button.classList.remove('button_colored-light_active')
      })

      if (target.classList.contains('button_colored-light')) {
        target.classList.add('button_colored-light_active')
      } else {
        target.classList.add('button_active')
      }

      showGallery(currentSeason)
    }
  }

  document.addEventListener("DOMContentLoaded", showDefaultGallery)
  galleriesList.addEventListener('click', switchGallery)
}

export { changeActiveButtonStyle, switchPortfolioGallery }

// =============================== End of Portfolio galleries switcher =============================== //
