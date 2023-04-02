import React, { useEffect, useState } from "react";
import LoadMovie from "../components/loaders/LoadMovie";

import MovieCard from "../components/moviedetails/MovieCard";
import Navigation from "../components/navigation/Navigation";

import "./styleSheet/MoviesStylesheet.css";

export default function Movies() {
  const [newMovie, SetNewMovie] = useState([]);

  useEffect(() => {
    async function getNewMovie() {
      const data = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getMovies"
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          SetNewMovie(dt["msg"]);
          return dt;
        });
      return data["msg"];
    }

    getNewMovie();
  }, []);

  if (newMovie.length == 0) {
    return <LoadMovie />;
  } else {
    return (
      <>
        <Navigation />

        <div className="MoviePageMovieCard">
          {newMovie.map((movie) => {
            return (
              <>
                <MovieCard key={movie["_id"]} info={movie} />
                <br />
                <br /> <br /> <br /> <br />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
