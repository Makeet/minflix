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

    await axios
      .get("/api/like")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  };
  useEffect(() => {
    apiCallMovies();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!movies) return null;
  return (
    <>
      <div className="sub-header">
        <h2 className="row-header">좋아요 누른 작품</h2>
      </div>
      <div className="favorite">
        <div className="row-container">
          {movies.data.map((movie) => (
            <div key={`keynum${movie.mno}`} className="item">
              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                <img
                  className="boxart-image-in-padded-container"
                  src={movie.poster}
                  alt={`poster of ${movie.mno}`}
                />
                <div className="fallback-text-container">
                  <p className="fallback-text">{`${movie.title}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Like;
