import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "./Myapi";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(movie);

      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        background: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      {/* {!movie ? null : movie.map((item, i) => <h1>{item.original_name}</h1>)} */}

      <div className="banner_content">
        <h1>{movie?.tittle || movie?.name || movie?.original_name}</h1>
        <div className="banner_button">
          <button>play</button>
          <button>mylist</button>
        </div>

        <h1>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade" />
    </header>
  );
}

export default Banner;
