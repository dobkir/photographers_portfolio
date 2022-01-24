// ===================== Smooth scroll + remove hash from the browser address bar ===================== //

export default function smoothScrollFunction() {

  const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

  smoothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const id = link.getAttribute('href').substring(1)
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })

}

// ================== End of Smooth scroll + remove hash from the browser address bar ================== //
