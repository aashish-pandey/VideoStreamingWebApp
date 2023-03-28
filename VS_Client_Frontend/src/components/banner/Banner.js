import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.css";
function Banner() {
  const [banner, setBanner] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getBanner"
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          if (dt["msg"].length > 0) {
            setBanner(dt["msg"][0]);
            console.log(dt["msg"][0]);
          }
          return dt;
        });
      return data["msg"];
    }

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("hlo bro");
    navigate("/watchBanner/" + banner._id);
  };

  return (
    <header className="banner" background="">
      <img
        className="bannerImg"
        src={
          process.env.REACT_APP_API_CALL_ADDRESS +
          "/getBannerThumbnail/" +
          banner._id
        }
        alt=""
      />

      {console.log(banner.name)}
      <div className="banner__contents">
        <h1 className="banner__title">{banner.name}</h1>
        <button className="banner__button" onClick={handleClick}>
          Play
        </button>
        <div className="banner__fadeBottom" />
      </div>
    </header>
  );
}

export default Banner;
