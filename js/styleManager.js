import { ColorRenderer } from './colorRender.js'

export default function manageStyles(skinColors) {
  const switchButtons = document.querySelector('.switch-buttons')
  const styleSwitcher = document.querySelector(
    '.switch-buttons .style-switcher'
  )

  styleSwitcher.addEventListener('click', () => {
    switchButtons.classList.toggle('open')
    styleSwitcher.classList.toggle('fa-spin')
  })
  window.addEventListener('scroll', () => {
    switchButtons.classList.remove('open')
    styleSwitcher.classList.remove('fa-spin')
  })

  const colors = document.querySelector('.colors')
  new ColorRenderer(colors, skinColors)

  const dayNight = document.querySelector('.day-night')
  dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-moon')
    dayNight.querySelector('i').classList.toggle('fa-sun')
    document.body.classList.toggle('light')
  })

  window.addEventListener('load', () => {
    document.body.classList.contains('light')
      ? dayNight.querySelector('i').classList.add('fa-moon')
      : dayNight.querySelector('i').classList.add('fa-sun')
  })
}
