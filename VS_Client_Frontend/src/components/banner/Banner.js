import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.css";
function Banner() {

 const [banner, setBanner] = useState({})
 const navigate = useNavigate()

 useEffect(()=>{

  async function fetchData(){

    const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getBanner")
              .then(res=>res.json())
                .then(dt=>{
                  console.log(dt)
                  if(dt['msg'].length > 0)
                  {
                    setBanner(dt['msg'][0])
                    console.log(dt['msg'][0])
                  }
                  return dt
                })
              return data['msg']

  }  

  fetchData()

  

 }, [])

 const handleClick = ()=>{
  console.log("hlo bro")
  navigate('/watchBanner/'+banner._id)
}

  return (
    <header
      className="banner12"
      >
        <div className="imgBanner12">
      <img className="bannerImg12" src={"http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/getBannerThumbnail/" + banner._id} alt="" />
      <div className="banner__fadeBottom12" />
        </div>
      {console.log(banner.name)}
      <div className="banner__contents12">
        <h1 className="banner__title12">{banner.name}</h1>
        <button className="banner__button12" onClick={handleClick}>Play</button>
      </div>
    </header>
  );
}

export default Banner;
