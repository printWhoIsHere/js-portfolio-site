const data = {
  info: {
    Birthday: '16 September 2002',
    Age: getCurrentAge('2002-09-16'),
    Email: 'hachiro2002@gmail.com',
    Phone: '8 (977) 508-85-95',
  },
  languages: {
    html: 'fa-brands fa-html5',
    css: 'fa-brands fa-css3',
    js: 'fa-brands fa-square-js',
    nodejs: 'fa-brands fa-node-js',
    react: 'fa-brands fa-react',
  },
  education: [
    {
      date: '1999-2000',
      title: 'WebMaster',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, nobis sequi dolorem similique repellendus optio quod ut hic voluptatem velit inventore esse. Tempore, quae sapiente!',
    },
    {
      date: '2001-2002',
      title: 'Frontend',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime doloribus nisi accusantium voluptate laudantium ratione impedit labore eligendi, deserunt enim sed reprehenderit illum tempore reiciendis velit, dolorem voluptates doloremque fugiat, praesentium consequatur. Placeat adipisci tempore quibusdam, repellat officiis aspernatur.',
    },
  ],
  experience: [
    {
      date: '0 - 1',
      title: 'exp',
      description: 'Lorem ipsum dolor sit, amet.',
    },
  ],
  sliders: [
    {
      link: 'https://github.com/printWhoIsHere',
      image: 'images/portfolio/slide1.png',
    },
    {
      link: 'https://github.com/printWhoIsHere',
      image: 'images/portfolio/slide2.png',
    },
    {
      link: 'https://github.com/printWhoIsHere',
      image: 'images/portfolio/slide3.png',
    },
  ],
}

function getCurrentAge(date) {
  return (
    ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000)) | 0
  )
}

function dataOutput() {
  const personalInfoRow = document.querySelector('.personal-info .row')
  const languagesRow = document.querySelector('.languages .row')
  const educationTimeline = document.querySelector('.education .timeline')
  const experienceTimeline = document.querySelector('.experience .timeline')
  const portfolioSliderTrack = document.querySelector(
    '.portfolio .slider-track'
  )

  // Peronal Info
  for (let key in data.info) {
    personalInfoRow.insertAdjacentHTML(
      'beforeend',
      `<div class="info-item py-15"><p>${key} : <span>${data.info[key]}</span></p></div>`
    )
  }

  // Languages
  for (let key in data.languages) {
    languagesRow.insertAdjacentHTML(
      'beforeend',
      `<div class="${key}"><i class="${data.languages[key]}" title="${key}"></i></div>`
    )
  }

  // Education Timeline
  data.education.forEach((item) => {
    educationTimeline.insertAdjacentHTML(
      'beforeend',
      `
      <div class="timeline-item">
        <div class="circle-dot"></div>
        <h3 class="timeline-date"><i class="fa fa-calendar"></i> ${item.date}</h3>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-text">${item.description}</p>
      </div>
    `
    )
  })

  // Experience Timeline
  data.experience.forEach((item) => {
    experienceTimeline.insertAdjacentHTML(
      'beforeend',
      `
      <div class="timeline-item">
        <div class="circle-dot"></div>
        <h3 class="timeline-date"><i class="fa fa-calendar"></i> ${item.date}</h3>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-text">${item.description}</p>
      </div>
    `
    )
  })

  // Portfolio Sliders
  data.sliders.forEach((slider) => {
    portfolioSliderTrack.insertAdjacentHTML(
      'beforeend',
      `
      <div class="slider-item" style="background-image: url('${slider.image}')">
        <a target="_blank" href="${slider.link}"></a>
      </div>
    `
    )
  })
}

export default dataOutput
