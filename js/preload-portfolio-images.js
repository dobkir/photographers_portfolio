// ==================================== Preload portfolio images ==================================== //

export default function preloadPortfolioImages() {

  const seasons = ['winter', 'spring', 'summer', 'autumn']

  function preloadGalleryImages(season) {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  }

  seasons.forEach(season => preloadGalleryImages(season))

}

// ================================= End of Preload portfolio images ================================= //
