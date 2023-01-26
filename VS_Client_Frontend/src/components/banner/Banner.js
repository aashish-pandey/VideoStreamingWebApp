import React from "react";
import "./banner.css";
function Banner() {
  return (
    <header
      className="banner"
    >
      <div className="banner__contents">
        <h1 className="banner__title">Background Image</h1>
        <button className="banner__button">Play</button>
        <h1 className="banner__description">
          {/* use the truncate function to show less description of movie */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quis porro cupiditate, enim sit perspiciatis quasi est dolores quod
          debitis cum dolore? Modi voluptatibus impedit hic incidunt, expedita
          necessitatibus ducimus!
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
