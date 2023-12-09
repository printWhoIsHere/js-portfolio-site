const nav = document.querySelector('.nav'),
  items = document.querySelectorAll('.nav li a'),
  itemsContent = document.querySelectorAll('section')

export default function asideSwitcher() {
  nav.onclick = (e) => {
    const id = e.target.dataset.id
    if (id) {
      items.forEach((item) => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')

      itemsContent.forEach((content) => {
        content.classList.add('hidden')
      })
      const el = document.getElementsByClassName(id)
      el[0].classList.remove('hidden')
    }
  }
}
