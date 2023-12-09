const switchButtons = document.querySelector('.switch-buttons')
const styleSwitcher = document.querySelector('.switch-buttons .style-switcher')
styleSwitcher.addEventListener('click', () => {
  switchButtons.classList.toggle('open')
  styleSwitcher.classList.toggle('fa-spin')
})

window.addEventListener('scroll', () => {
  if (switchButtons.classList.contains('open')) {
    switchButtons.classList.remove('open')
    styleSwitcher.classList.remove('fa-spin')
  }
})

const altStyles = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
  altStyles.forEach((style) => {
    color === style.getAttribute('title')
      ? style.removeAttribute('disabled')
      : style.setAttribute('disabled', 'true')
  })
}

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
