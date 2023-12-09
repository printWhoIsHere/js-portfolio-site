import dataOutput from './data.js'
import writeLoop from './typewrite.js'
import asideSwitcher from './aside-switcher.js'
import tgBot from './tg-bot.js'

writeLoop()
dataOutput()
asideSwitcher()
tgBot()

particlesJS.load('particles-js', 'assets/particles/config.json', function () {})
