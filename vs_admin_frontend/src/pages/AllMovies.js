import React, { useEffect, useState } from 'react'

export default function AllMovies() {

    const [movies, setMovies] = useState()

    useEffect(()=>{
        async function getAllMovies(){
            const data = await fetch("http://localhost:3560/getAllMovies")
            .then(res=>res.json())
              .then(dt=>{
                setMovies(dt['msg'])
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllMovies()
    }, [])

  if(!movies){
    return(
        <>Loading....</>
    )
  } else 
  return (
    <div>Allusers

    {movies.map(movie=>{return(
        <>
        {movie._id}
        <br/>
        </>
    )})}

    </div>
  )
}
