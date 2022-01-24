// ========================================== The mobile menu ========================================== //

export default function mobileMenuFunction(params) {

  const hamburgerButton = document.querySelector('.hamburger-button')
  const nav = document.querySelector('.nav')
  const pageMask = document.querySelector('.mask')
  const body = document.body

  function addPageMask() {
    pageMask.classList.add('mask-active')
    pageMask.addEventListener('click', closeMobileMenu)
  }

  function removePageMask() {
    pageMask.classList.remove('mask-active')
    pageMask.removeEventListener('click', closeMobileMenu)
  }

  function showMobileMenu() {
    hamburgerButton.classList.add('active-hamburger-button')
    nav.classList.add('show-mobile-navigation')
    body.classList.add('no-scroll')
    addPageMask()
  }

  function closeMobileMenu() {
    hamburgerButton.classList.remove('active-hamburger-button')
    nav.classList.remove('show-mobile-navigation')
    body.classList.remove('no-scroll')
    removePageMask()
  }

  function handlerMenu(event) {
    const target = event.target

    if (target.classList.contains('nav-link')) {
      toggleMobileMenu()
    }
  };

  function toggleMobileMenu() {
    if (nav.classList.contains('show-mobile-navigation')) {
      nav.removeEventListener('click', handlerMenu)
      closeMobileMenu()
    } else {
      nav.addEventListener('click', handlerMenu)
      showMobileMenu()
    }
  }

  hamburgerButton.addEventListener('click', toggleMobileMenu);

}

// ===================================== End of the mobile menu ===================================== //
