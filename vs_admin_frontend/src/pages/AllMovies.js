import React, { useEffect, useState } from 'react'
import Nav1 from './Nav1'
import Table from 'react-bootstrap/Table';
// import AllMoviesCard from ''
import AllMoviesCard from '../components/AllMoviesCard'

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
        <>
        {/* Loading.... */}
        </>
    )
  } else 
  return (
        
 <><Nav1 /><div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Quality</th>
            <th>Release</th>
            <th>Casts</th>
          </tr>
        </thead>
        <tbody>

        {movies.map(movie=>{return(
          
              <AllMoviesCard key= {movie._id} movie={movie} />



            )
          })}
        </tbody>
      </Table>
    </div>
</>
  )
}
