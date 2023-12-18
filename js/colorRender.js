class ColorRenderer {
  constructor(colorsBlock, config) {
    this.colorsBlock = colorsBlock
    this.config = config
    this.renderColors()
  }

  renderColors() {
    for (const key in this.config) {
      if (
        Object.prototype.hasOwnProperty.call(this.config, key) &&
        key.startsWith('color-')
      ) {
        const colorValue = this.config[key]
        const colorElement = document.createElement('span')
        colorElement.style.backgroundColor = colorValue
        colorElement.classList.add(key)
        colorElement.addEventListener('click', () => this.setActiveStyle(key))
        this.colorsBlock.appendChild(colorElement)
      }
    }
  }

  setActiveStyle(colorClass) {
    const selectedColor = this.config[colorClass]
    document.documentElement.style.setProperty('--skin-color', selectedColor)
  }
}

export { ColorRenderer }
