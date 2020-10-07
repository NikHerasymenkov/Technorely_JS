import './index.css'
const requestURL = `http://api.tvmaze.com/search/shows/`
const form = document.querySelector('form')
const wrapper = document.getElementById('wrapper')

function sendRequest(url, method, newParam = []) {
  document.getElementById('row')
  return fetch(url, { method })
    .then(response => response.json())
    .then(response => {
      if (response.length <= 1) {
        console.log('Введите название')
      } else {
        response.map(film => {
          const theFilm = newParam
          const name = film.show.name
          const image = film.show.image.medium
          const language = film.show.language
          const genres = film.show.genres
          const status = film.show.status
          const premiered = film.show.premiered
          const p = document.createElement('p')
          const img = document.createElement('img')
          const div = document.createElement('div')
          const a = document.createElement('a')
          p.innerHTML = `
                   <li ><strong>${name}</strong></li>
                    <li><strong>${status}</strong></li>
                     <li><strong>${language}</strong></li>
                    <li> <strong>${genres}</strong></li>
                      <li> <strong>${premiered}</strong></li>
                    `
          img.src = image
          a.href = film.show.url
          document.getElementById('wrapper').appendChild(div)
          div.appendChild(a)
          a.appendChild(img)
          div.appendChild(p)
          theFilm.push({ name, language, genres, status, premiered })
          console.log(theFilm)
        })
      }
    })
}

form.onsubmit = sendSearch

function sendSearch(e) {
  e.preventDefault()
  wrapper.innerText = ''

  console.log(e.target[0].value)
  sendRequest(`${requestURL}?q=${e.target[0].value} `).catch(err =>
    console.log(err)
  )
}
