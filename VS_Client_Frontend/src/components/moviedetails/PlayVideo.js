import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getCookies from '../../pages/CookieHandler'
import Navigation from '../navigation/Navigation'


import './PlayVideo.css'

export default function PlayVideo({ route, navigation }) {
  const {id} = useParams()

  const[seekPlayerValue, setSeekPlayerValue] = useState(0)

  
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

    function playPausebtn(bn, vid){
      var video = document.getElementById(vid)
      var btn = document.getElementById(bn)
      console.log(vid)
      if(video.paused){
        video.play()
        btn.innerHTML = "Pause"
      }else{
        video.pause()
        btn.innerHTML = "Play"
      }
    }

    function vidSeek(){
      var video = document.getElementById('video-id')
      var seekSlider = document.getElementById('seekSlider')
      
      var seekto = video.duration * (seekSlider.value / 100)
      video.currentTime = seekto;
      setSeekPlayerValue(seekSlider.value)
    }

    function seekTimeUpdate(){
      var video = document.getElementById('video-id')
      var seekSlider = document.getElementById('seekSlider')

      var nt = video.currentTime * (100 / video.duration)
      setSeekPlayerValue(nt)

    }

  return (
    
    <div id="videoplayerQ">
       {/* <button onClick={() => navigate(-1)} className="gobackbtn">Go Back</button> */}
      <video id='video-id' controls autoPlay onTimeUpdate={()=>seekTimeUpdate()}>
        <source src={"http://localhost:3560/getVideo/" + id}  type='video/mp4' />
      </video> 

      <div id='video-controls'>

        <button id='playpausebtn' onClick={()=>playPausebtn('playpausebtn', 'video-id')}>Play</button>
        <input id='seekSlider' onChange={()=>vidSeek()} type='range' min='0' max='100' value={seekPlayerValue} step='0.01' />

      </div>
    
    </div>
    )

}
