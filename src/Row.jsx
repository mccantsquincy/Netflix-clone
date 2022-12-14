import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies)

  return (
    <div className="row">
      <h2 className="">{title}</h2>

      {movies.map(movie => (
        <img 
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
        }`} alt={movie.name} />
      ))}
    </div>
  );
}

export default Row;
