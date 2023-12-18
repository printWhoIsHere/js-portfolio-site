import { setAsideActiveLink, setSmoothScroll } from './asideSwitcher.js'
import manageStyles from './styleManager.js'
import writeLoop from './typewrite.js'
import dataOutput from './data.js'
import { Slider } from './slider.js'
import telegramBot from './telegramBot.js'

const nav = document.querySelector('.nav')
const items = document.querySelectorAll('.nav li a')
const sections = document.querySelectorAll('section')
setAsideActiveLink(sections, items, nav)
setSmoothScroll(nav)

const skinColors = {
  'color-1': '#ED7D31',
  'color-2': '#FD2E39',
  'color-3': '#2FA181',
  'color-4': '#1153B7',
  'color-5': '#FE3EB3',
}
manageStyles(skinColors)

writeLoop()
particlesJS.load('particles-js', 'assets/particles/config.json', function () {})

dataOutput()

const slider = document.querySelector('.slider')
new Slider(slider, {
  slidesToShow: 1,
  slidesToScroll: 1,
})

telegramBot()
