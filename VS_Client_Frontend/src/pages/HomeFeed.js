import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/banner/Banner";
import MovieCard from "../components/moviedetails/MovieCard";
import Navigation from "../components/navigation/Navigation";
import getCookies from "./CookieHandler";
import "./HomeFeed.css";
import SessionTracker from "../components/sessionManagement/SessionTracker";
import useCookies from "react-cookie/cjs/useCookies";
import { browserName, osName, deviceType } from "react-device-detect";
import GetMyIp from "../helperFunctions/GetMyIp";
import Loader from "./Loader";
import CheckInternetSpeed from "../components/CheckInternetSpeed";
import HomefeedNavigation from "../components/navigation/HomefeedNavigation";

export default function HomeFeed() {
  const [newMovie, SetNewMovie] = useState([]);
  const [watchHistory, SetWatchHistory] = useState([]);

  const [cookies, setCookies] = useCookies(["user"]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setCookies("permissionDenied", "");
    async function handleWatchHistory() {
      const userInfo = {
        uemail: getCookies("uemail"),
      };

      const data = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getWatchHistory",
        {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      )
        .then((res) => res.json())
        .then(async (dt) => {
          var movieInfoData = [];
          for (var i = 0; i < dt.length; i++) {
            var id = dt[i]["movieId"];
            var movieinf = await fetch(
              process.env.REACT_APP_API_CALL_ADDRESS + "/getMoviesByID/" + id
            )
              .then((res) => res.json())
              .then((dt) => {
                // console.log(dt['msg'][0])
                return dt["msg"][0];
              });
            // console.log(movieinf)
            movieInfoData.push(movieinf);
          }

          // console.log(movieInfoData)

          return movieInfoData;
        });
      console.log(data);

      SetWatchHistory(data);
    }

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

    handleWatchHistory();
    getNewMovie();
    console.log(newMovie);
  }, []);

  console.log(
    newMovie.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  if (!newMovie) {
    return <Loader />;
  } else if (query != "") {
    return (
      <>
        <div className="HomeFeedMain">
          <CheckInternetSpeed />

          <Navigation />
          <div className="searchMovieBox">
            <input
              className="searchMovieBar"
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <div className="SearchDisplay">
            <h2>Based on your Searches</h2>
            <div className="SearchDisplayCard">
              {newMovie
                .filter((movie) =>
                  movie.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((movie) => {
                  return <MovieCard key={movie["_id"]} info={movie} />;
                })}
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <div className="HomeFeedMain">
        <CheckInternetSpeed />

        <HomefeedNavigation/>

        <div className="searchMovieBox">
          <input
            className="searchMovieBar"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <Banner />
        <div className="firstDisplayRow">
        <h2 className="firstDisplayRowItems">Latest Releases</h2>
        <div className="MovieListDisplayCard firstDisplayRowItems">
          {newMovie.map((movie) => {
            return <MovieCard key={movie["_id"]} info={movie} />;
          })}
        </div>
        </div>
          <div className="secondDisplayRow"></div>
        <h2>Continue your watching</h2>
        <div className="MovieListDisplayCard">
          {
            // console.log(watchHistory)
            watchHistory.map((movie) => {
              return <MovieCard key={movie["_id"]} info={movie} />;
            })
          }
        </div>

        <h2>From Netflix</h2>

        <div className="MovieListDisplayCard">
          {newMovie.map((movie) => {
            return <MovieCard key={movie["_id"]} info={movie} />;
          })}
        </div>

        <h2>From Disney + hotstar</h2>

        <div className="MovieListDisplayCard">
          {newMovie.map((movie) => {
            return <MovieCard key={movie["_id"]} info={movie} />;
          })}
        </div>

        <h2>From Amazon prime</h2>

        <div className="MovieListDisplayCard">
          {newMovie.map((movie) => {
            return <MovieCard key={movie["_id"]} info={movie} />;
          })}
        </div>
      </div>
    );
}
