// =================================== Portfolio galleries switcher =================================== //

export default function switchPortfolioGallery() {

  const portfolioButtonsArr = document.querySelectorAll('.button_portfolio')
  const portfolioImagesArr = document.querySelectorAll('.gallery-image')
  const galleriesList = document.querySelector('.galleries-list')

  function switchGallery(event) {
    const target = event.target

    if (target.classList.contains('button_portfolio')) {
      const currentSeason = target.dataset.season
      portfolioImagesArr.forEach((img, index) => {
        img.src = `./../assets/img/${currentSeason}/${index + 1}.jpg`
      })
    }

    portfolioButtonsArr.forEach(button =>
      button.classList.contains('button_colored') &&
      button.classList.remove('button_colored')
    )

    target.classList.add('button_colored')
  }

  galleriesList.addEventListener('click', switchGallery)
}

// =============================== End of Portfolio galleries switcher =============================== //
