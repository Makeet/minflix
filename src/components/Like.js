import React, { useState, useEffect } from "react";
import axios from "axios";
import loadingImage from "logos/loading.svg";
import MiniModal from "components/MiniModal";
function Like() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [miniModal, setMiniModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [coordinate, setCoordinate]=useState([]);

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
  if (loading)
    return (
      <div className="status">
        <img alt="logo" src={loadingImage} />
      </div>
    );
  if (error) return <div className="status">{error}</div>;
  if (!movies) return null;

  return (<>
      <div className="sub-header">
        <h2 className="row-header">좋아요 누른 작품</h2>
      </div>
      <div className="favorite">
        <div className="row-container">
          {movies.data.map((movie) => (
            <div className="item">
              <div
                className="boxart-size-16x9 boxart-container boxart-rounded"
                onMouseOver={(e) => {
                  setMiniModal(true);
                  setMovieInfo(movie);
                  setCoordinate([window.pageXOffset + e.target.getBoundingClientRect().left,window.pageYOffset + e.target.getBoundingClientRect().top]);
                }}
                // onClick={(e) => {
                //   setMiniModal(true);
                //   setMovieInfo(movie);
                //   setCoordinate([e.clientX,e.clientY]);
                // }}
                onMouseOut={() => {
                  setMiniModal();
                  setMovieInfo(null);
                }}
              >
                <img
                  className="boxart-image-in-padded-container"
                  src={movie.poster}
                  alt={`poster`}
                />
                <div className="fallback-text-container">
                  <p className="fallback-text">{`${movie.title}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      {miniModal ? <MiniModal movieInfo={movieInfo} coordinate={coordinate}/> : ""}
    </>
  );
}
export default Like;
