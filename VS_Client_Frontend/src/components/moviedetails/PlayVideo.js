import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getCookies from '../../pages/CookieHandler'
import Navigation from '../navigation/Navigation'

export default function PlayVideo({ route, navigation }) {

    const {id} = useParams()


    useEffect(()=>{

      const saveInfo = {
        movieId: id,
        userEmail: getCookies('uemail')
      }

      //request the server to store the video in user history
      fetch("http://localhost:3560/saveWatchHistory", {
        method: "post", 
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify(saveInfo)
      }) 
    }, [])

  return (
    <div>
    <Navigation/>    

    <video id='video-id' controls width={"1000px"} height={"400px"}>
      <source src={"http://localhost:3560/getVideo/" + id}  type='video/mp4' />
    </video>

    </div>
  )
}
