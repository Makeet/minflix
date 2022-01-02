import React, { useState, useEffect } from "react";
import axios from "axios";

function Like() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("like db call...");
  const apiCallMovies = async () => {
    setError(null);
    setLoading(true);
    setMovies(null);
    await axios
      .get("/api/like")
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("E>>>", error);
      });
  };
  useEffect(() => {
    apiCallMovies();
  }, []);
  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러발생</div>
  if(!movies) return null;
  return (<>
  <ul>
    {movies.map(movie=>(
      <li key={movies.mno}>
        {movie.title}
      </li>
    ))}
  </ul>
  </>);
}
export default Like;
