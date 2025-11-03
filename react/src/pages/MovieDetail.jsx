import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const [peliculas, setPeliculas] = useState([])
  const { id } = useParams();
 
  
      useEffect(() => {
      fetch('/data/trailerflix.json')
        .then(response => response.json())
        .then(data => {
          setPeliculas(data)
          console.log(data)/////!!!!!!
        })
        .catch(error => console.error('Error fetching peliculas:', error))
    },[])

   const pelicula = peliculas.find(item => item.id === id)
  return (
    <main className="movie-page-container">
        <button className="back-btn"><Link to={"/"}>← Volver al catálogo</Link></button>
        <div className="movie-details">
          { pelicula ?(
            <>
            <div className="movie-poster">
              <img src={pelicula.poster} alt={pelicula.titulo} />
            </div>
            <div className="movie-info">
              <h2>{pelicula.titulo}</h2>
              <p><strong>Resumen:</strong> {pelicula.resumen}</p>
              <iframe width="560" height="315" src={pelicula.trailer} frameborder="0" allowfullscreen></iframe>
              <p><strong>Reparto:</strong> {pelicula.reparto}</p>
            </div>
            </>
          ) : (<p>Cargando detalles de la película...</p>

          )}
        </div>
    </main>
  )
}
