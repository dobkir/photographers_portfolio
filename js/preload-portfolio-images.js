import gallerySeasons from "./gallery-seasons.js"

// ==================================== Preload portfolio images ==================================== //

export default function preloadPortfolioImages() {

  function preloadGalleryImages(season) {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  }

  gallerySeasons.forEach(season => preloadGalleryImages(season))
}

// ================================= End of Preload portfolio images ================================= //
