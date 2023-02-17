import React, { useEffect, useState } from 'react'

import MovieCard from '../components/moviedetails/MovieCard'
import Navigation from '../components/navigation/Navigation'

import './styleSheet/MoviesStylesheet.css'

export default function Movies() {
    const [newMovie, SetNewMovie] = useState([])


    useEffect(()=>{
        async function getNewMovie(){
            const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getMovies")
            .then(res=>res.json())
              .then(dt=>{
                console.log(dt)
                SetNewMovie(dt['msg'])
                return dt
              })
            return data['msg']
          }
        getNewMovie()    
    }, [])

  return (
    <>
        <Navigation/>

        <div className='MoviePageMovieCard'>

{newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}


    </div>
    </>
  )
}
