import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import MovieCard from '../components/MovieCad'

export default function Home() {
    const [peliculas, setPeliculas] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
    fetch('/data/trailerflix.json')
      .then(response => response.json())
      .then(data => {
        setPeliculas(data)
        console.log(data)/////!!!!!!
      })
      .catch(error => console.error('Error fetching peliculas:', error))
  },[])
 
  return (
    <div className="">
        <Header/>
        
        <section>
        <ul style={{ listStyle: 'none' }}>
            {peliculas.map(pelicula => (
            <li key={pelicula.id}>
                <img src={pelicula.poster} alt={pelicula.titulo} width="300px" />
                <h2>{pelicula.titulo}</h2>
                <p>{pelicula.categoria}</p>
                <p>{pelicula.gen}</p>
                <p>{pelicula.resumen}</p>
                <button className="back-home-btn" onClick={() => navigate("/movie/" + pelicula.id)}>Pelicula</button>
            </li>
            ))}
        </ul>
        </section>
        <Outlet />
        <MovieCard />

    </div>
  )
}
