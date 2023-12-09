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
}

function getCurrentAge(date) {
  return (
    ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000)) | 0
  )
}

function dataOutput() {
  // console.log(data)

  for (let key in data.info) {
    let div = document.createElement('div')
    div.className = 'info-item py-15'
    div.innerHTML = `<p>${key} : <span>${data.info[key]}</span></p>`
    document.querySelector('.personal-info .row').appendChild(div)
  }

  for (let key in data.languages) {
    let div = document.createElement('div')
    div.className = `${key}`
    div.innerHTML = `<i class="${data.languages[key]}" title="${key}"></i>`
    document.querySelector('.languages .row').appendChild(div)
  }

  data.education.forEach((item) => {
    let educationItem = document.createElement('div')
    educationItem.className = 'timeline-item'
    educationItem.innerHTML = `
      <div class="circle-dot"></div>
      <h3 class="timeline-date">
        <i class="fa fa-calendar"></i> ${item.date}
      </h3>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-text">${item.description}</p>
      `
    document.querySelector('.education .timeline').appendChild(educationItem)
  })

  data.experience.forEach((item) => {
    let experienceItem = document.createElement('div')
    experienceItem.className = 'timeline-item'
    experienceItem.innerHTML = `
      <div class="circle-dot"></div>
      <h3 class="timeline-date">
        <i class="fa fa-calendar"></i> ${item.date}
      </h3>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-text">${item.description}</p>
      `
    document.querySelector('.experience .timeline').appendChild(experienceItem)
  })
}

export default dataOutput
