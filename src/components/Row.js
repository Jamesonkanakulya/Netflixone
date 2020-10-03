import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import Myslider from "./Myslider";
import movieTrail from 'movie-trailer'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailer] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const dots = false;
  const SlideToshow = 13;
  const arrow = "none";
  const responsive = [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

const opts ={
  height:"390",
  width:"150",
  playerVars:{
    autoplay:1
  }
}

const handleMovie = (movie) =>{
  if(trailerUrl){
    settrailer('')

  }else{
    movieTrail( movie?.name || "")
     .then((url) => {
       const urlParams =new URLSearchParams(new URL(url).search)
       settrailer(urlParams.get('v'))
     })
     .catch((error) => console.log(error))
  }

}

  return (
    <div className="row">
      <h1>{title}</h1>
      {/* <div className="row_poster">
        {movies.map((movie) => (
          <img
            className={isLargeRow ? "large_row" : null}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie}
          />
        ))}
      </div> */}

      <Myslider
        responsive={responsive}
        dots={dots}
        SlideToshow={SlideToshow}
        nextButtonPosition="101%"
        prevButtonPosition="-7.5rem"
        nextTopPosition="-10rem"
        prevTopPosition="13.5rem"
        color="black"
        arrow={arrow}
      >
        {movies.map((movie) => {
          return (
            <div className="row_poster" key={movie.id}>
              <img
                className={isLargeRow ? "large_row" : null}

              onClick={ () => handleMovie(movie)}
                src={`${baseUrl}${
                  isLargeRow?movie.poster_path:movie.backdrop_path
                }`}
                alt={movie?.tittle || movie?.name || movie?.original_name}
              />
            </div>
          );
        })}
      </Myslider>
     {trailerUrl &&  <YouTube videoId={trailerUrl} 
     opts={opts}/>}
    </div>
  );
}

export default Row;
