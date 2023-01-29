import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import MovieCard from '../components/moviedetails/MovieCard'
import Navigation from '../components/navigation/Navigation'
import getCookies from './CookieHandler'
import './HomeFeed.css'

export default function HomeFeed() {

    const [newMovie, SetNewMovie] = useState()
    const [watchHistory, SetWatchHistory] = useState([])

    


    useEffect(()=>{
      async function handleWatchHistory(){
        const userInfo = {
          uemail: getCookies('uemail')
        }
  
        const data = await fetch("http://localhost:3560/getWatchHistory", {
          method: "post", 
          headers:{'Content-type': 'application/json'},
          body: JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(async dt=>{
          // console.log(dt)
          // console.log(dt.length)
          var movieInfoData = []
          for(var i = 0; i < dt.length; i++)
          {
            // console.log(dt[i])
            var id = dt[i]['movieId']
            // console.log(id)
            var movieinf = await fetch("http://localhost:3560/getMoviesByID/" + id)
                                  .then(res=>res.json())
                                  .then(dt=>{
                                    // console.log(dt['msg'][0])
                                    return dt['msg'][0]
                                  })
            // console.log(movieinf)
            movieInfoData.push(movieinf)
          }

          // console.log(movieInfoData)

          return movieInfoData
        })
        console.log(data)
        SetWatchHistory(data)
      }


      async function getNewMovie(){
        const data = await fetch("http://localhost:3560/getMovies")
        .then(res=>res.json())
          .then(dt=>{
            SetNewMovie(dt['msg'])
            return dt
          })
        return data['msg']
      }

      handleWatchHistory()
      getNewMovie();
      console.log(newMovie)
    }, [])

    
 
  if(!newMovie){
    return (
      <div>
        Loading ...

      </div>
    )
  }
else
  return (
    <div className='HomeFeedMain'>
      <Navigation/>

    <Banner/>
    <h2>Latest Releases</h2>
    <div className='MovieListDisplayCard'>
      {newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}

{newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}

      <div className="paddles">
        <button className="leftPaddle"> <FontAwesomeIcon icon="faSolid faChevronLeft" /></button>
        
        <button className="rightPaddle"> right </button>
      </div>

    </div>

    <h2>Continue your watching</h2>
    <div className='MovieListDisplayCard'>
    {
      // console.log(watchHistory)
      watchHistory.map(movie=>{
        return(<MovieCard key={movie['_id']} info = {movie}/>)
      })
    }
    </div>

    <h2>From Netflix</h2>

    <div className='MovieListDisplayCard'>
      {newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}
      {newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}
    </div>

    <h2>From Disney + hotstar</h2>

    <div className='MovieListDisplayCard'>
      {newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}
    </div>

    <h2>From Amazon prime</h2>

    <div className='MovieListDisplayCard'>
      {newMovie.map(movie=>{
        return(
          <MovieCard key={movie['_id']} info = {movie}/>
        )
      })}
    </div>









      
      {/* <button onClick={getall}>get movies</button> */}

      {/* <video controls autoPlay width="650px">
        <source src="http://localhost:3560/getVideo" type="video/mp4"/>
      </video> */}
      
      
      </div>
  )
}
