import React, { useState, useEffect } from "react";
import axios from "axios";

function Like() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCallMovies = async () => {
    setError(null);
    setLoading(true);
    setMovies(null);
    console.log("like db call...");
    await axios
      .get("/api/like")
      .then((response) => {
        //console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("E>>>", error);
        setError(error);
      });
    setLoading(false);
  
  };
  console.log(movies)
  useEffect(() => {
    apiCallMovies();
  },[]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!movies) return null;
  return (
    <div>
      <h1>좋아요 누른 작품</h1>
      <ul>
        {movies.data.map((movie) => (
          <li key={movie.mno} class="item">
            <img src={movie.poster} alt={`poster of ${movie.mno}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Like;
