function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const words = ['student', 'programmer', 'frontend']
const el = document.querySelector('.typewrite')
let sleepTime = 100
let wordIndex = 0

const writeLoop = async () => {
  while (true) {
    let word = words[wordIndex]
    await typeWord(word)
    await eraseWord(word)
    wordIndex = (wordIndex + 1) % words.length
  }
}

const typeWord = async (word) => {
  for (let i = 0; i <= word.length; i++) {
    el.innerText = word.substring(0, i)
    await sleep(sleepTime)
  }
  await sleep(sleepTime * 10)
}

const eraseWord = async (word) => {
  for (let i = word.length; i >= 0; i--) {
    el.innerText = word.substring(0, i)
    await sleep(sleepTime)
  }
  await sleep(sleepTime * 10)
}

export default writeLoop
