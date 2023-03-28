import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import MovieCard from "../components/moviedetails/MovieCard";
import LoadMovie from "../components/loaders/LoadMovie";

export default function Trending() {
  const [trendingMovie, SetTrendingMovie] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const data = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getTrendingMovies"
      )
        .then((res) => res.json())
        .then(async (dt) => {
          dt = dt.msg;
          var movieInfoData = [];
          for (var i = 0; i < dt.length; i++) {
            var id = dt[i];

            var movieinf = await fetch(
              process.env.REACT_APP_API_CALL_ADDRESS + "/getMoviesByID/" + id
            )
              .then((res) => res.json())
              .then((dt) => {
                // console.log(dt['msg'][0])
                return dt["msg"][0];
              });
            movieInfoData.push(movieinf);
          }

          console.log(movieInfoData);

          return movieInfoData;
        });

      SetTrendingMovie(data);
      console.log(trendingMovie);
    }

    getTrendingMovies();
  }, []);

  if (trendingMovie.length <= 0) {
    return <LoadMovie />;
  }

  return (
    <div>
      <Navigation />
      <div className="MoviePageMovieCard">
        {trendingMovie.map((movie) => {
          return <MovieCard key={movie["_id"]} info={movie} />;
        })}
      </div>
    </div>
  );
}
