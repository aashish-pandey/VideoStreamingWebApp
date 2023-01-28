import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

    const navigate = useNavigate()

  return (
    
    <div className="videoplayerQ">
      <button onClick={() => navigate(-1)} className="gobackbtn">Go Back</button>
    <video id='video-id' controls>
      <source src={"http://localhost:3560/getVideo/" + id}  type='video/mp4' />
    </video>
    </div>

  )
}
