const TOKEN = '6388661411:AAGXLRjTbQpl2piq2ZcE8A0PxN-6ZMpOkJo'
const CHAT_ID = '-1001999623427'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succesMessage = document.getElementById('successMessage')

export default function tgBot() {
  document
    .getElementById('tg-feedback')
    .addEventListener('submit', function (event) {
      event.preventDefault()

      let message = `<b>Сообщение от ${new Date().toLocaleString()}</b>\n`
      message += `<b>Отправитель: ${this.name.value}</b>\n`
      message += `<b>Телефон: ${this.phone.value}</b>\n`
      message += `<b>Тема: ${this.subject.value}</b>\n`
      message += `<b>Сообщение: ${this.message.value}</b>\n`
      console.log(message)

      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message,
        })
        .then((res) => {
          this.name.value = ''
          this.phone.value = ''
          this.subject.value = ''
          this.message.value = ''

          succesMessage.style.display = 'flex'
          setTimeout(function () {
            succesMessage.style.display = 'none'
          }, 5000)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          console.log('The end')
        })
    })
}
