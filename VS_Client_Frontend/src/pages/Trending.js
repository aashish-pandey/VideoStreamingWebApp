import React from 'react'
import { useEffect } from 'react'
import Navigation from '../components/navigation/Navigation'


export default function Trending() {

    useEffect(()=>{
        async function getTrendingMovies(){
            await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getTrendingMovies")
                    .then(res=>res.json())
                    .then(dt=>{
                        console.log(dt.msg)
                    })
        }

        getTrendingMovies()

    }, [])

  return (
    <div>
        <Navigation/>
        <div className='MoviePageMovieCard'>

        </div>
    </div>
  )
}
