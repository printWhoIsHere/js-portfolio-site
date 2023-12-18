const TOKEN = '6388661411:AAGXLRjTbQpl2piq2ZcE8A0PxN-6ZMpOkJo'
const CHAT_ID = '-1001999623427'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succesMessage = document.getElementById('successMessage')

export default function telegramBot() {
  document
    .getElementById('tg-feedback')
    .addEventListener('submit', function (event) {
      event.preventDefault()

      const formData = {
        name: this.name.value,
        phone: this.phone.value,
        subject: this.subject.value,
        message: this.message.value,
      }

      const message =
        `<b>Сообщение от ${new Date().toLocaleString()}</b>\n` +
        `<i>Отправитель:</i> ${formData.name}\n` +
        `<i>Телефон:</i> ${formData.phone}\n` +
        `<i>Тема:</i> ${formData.subject}\n` +
        `<i>Сообщение:</i> ${formData.message}\n`

      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message,
        })
        .then((res) => {
          Object.values(formData).forEach((value, index) => {
            this[Object.keys(formData)[index]].value = ''
          })

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
