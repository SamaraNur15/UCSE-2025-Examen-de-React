const generos = ['Ciencia Ficción', 'Drama', 'Suceso Real', 'Suspenso', 'Fantasía', 'Familia', 'Acción', 'Terror', 'Aventura'].sort()
const URL = '../data/trailerflix.json'
let contenido
let armoHTML

const retornoCard = (contenido) => {
  const { id, poster, titulo, categoria } = contenido
  return `<div class="card">
              <a href="movie.html?id=${id}">
                <div class="card-picture">
                    <img src="${poster}" alt="${titulo}" title="${titulo}">
                </div>
                <div class="card-bottom">
                    <p class="card-bottom-title">${titulo}</p>
                    <p>${categoria}</p>
                </div>
              </a>
            </div>`
}

const retornoError = () => {
  return `<div class="error">
                  <h1 class="red-text">La función está demorada</h1>
                  <p>Estamos haciendo algunos ajustes 🍿</p>
                  <p>Intenta nuevamente en algunos instantes... 🎞</p>
              </div>`
}

const retornoGenero = (gen) => {
  return `<article class="genero">
              <h2>${gen}</h2>
          </article>`
}

const container = document.querySelector('.container')
const getContenido = async (URL) => {
  armoHTML = ''
  try {
    const response = await fetch(URL)
    const data = await response.json()
    contenido = await data
    if (contenido.length > 0) {
      // debugger
      generos.forEach(gen => {
        const resultado = contenido.filter(cont => cont.gen === gen)
        if (resultado.length > 0) {
          armoHTML += retornoGenero(gen)
          resultado.forEach(contenidoFiltrado => { armoHTML += retornoCard(contenidoFiltrado) })
        }
      })
    }
  } catch (error) {
    armoHTML = retornoError()
  } finally {
    container.innerHTML = armoHTML
  }
}

getContenido(URL)
