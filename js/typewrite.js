function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const words = ['student', 'programmer', 'frontend']
const el = document.querySelector('.typewrite')
// const elParent = document.querySelector('.home')
let sleepTime = 100
let wordIndex = 0
const writeLoop = async () => {
  while (true) {
    // if (elParent.classList.contains('hidden')) {
    //   return 0
    // }
    let word = words[wordIndex]

    for (let i = 0; i < word.length; i++) {
      el.innerText = word.substring(0, i + 1)
      await sleep(sleepTime)
    }
    await sleep(sleepTime * 10)

    for (let i = word.length; i > 0; i--) {
      el.innerText = word.substring(0, i - 1)
      await sleep(sleepTime)
    }
    await sleep(sleepTime * 10)

    wordIndex === words.length - 1 ? (wordIndex = 0) : wordIndex++
  }
}

export default writeLoop
