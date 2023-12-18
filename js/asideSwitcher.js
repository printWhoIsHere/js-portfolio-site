const setAsideActiveLink = (sections, items, nav) => {
  const updateActiveLink = () => {
    let scrollPosition = window.scrollY + 50 // Учитываем высоту фиксированного элемента навигации

    sections.forEach((section) => {
      const top = section.offsetTop
      const height = section.offsetHeight
      const id = section.getAttribute('id')
      const activeLink = nav.querySelector(`a[data-id="${id}"]`)

      if (scrollPosition >= top && scrollPosition < top + height) {
        items.forEach((item) => {
          item.classList.remove('active')
        })

        if (activeLink) {
          activeLink.classList.add('active')
        }
      }
    })
  }

  window.addEventListener('scroll', updateActiveLink)
  window.addEventListener('load', updateActiveLink)
}

const setSmoothScroll = (nav) => {
  nav.addEventListener('click', (event) => {
    event.preventDefault()
    const targetId = event.target.dataset.id
    const targetSection = document.querySelector(`#${targetId}`)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
}

export { setAsideActiveLink, setSmoothScroll }
