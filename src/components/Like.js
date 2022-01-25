import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as LoadingImage } from "images/loading.svg";
import MiniModal from "./MiniModal";

function Like() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [miniModal, setMiniModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const [coordinate, setCoordinate] = useState([]);

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

  /* 미니모달 영역 크기를 잡아주는데 필요한 계산식 */
  const top_coordinate =
    coordinate.top - 250 <= 0 ? "60px" : coordinate.top - 250 + "px";
  const width = (coordinate.right - coordinate.left) * 1.005 + "px";

  const ModalStyle = {
    width: width,
    left: coordinate.left + "px",
    top: top_coordinate,
  };


  if (loading)
    return (
      <div className="status">
        <LoadingImage />
      </div>
    );
  if (error) return <div className="status">{error}</div>;
  if (!movies) return null;

  return (
    <>
      <div className="sub-header">
        <h2 className="row-header">좋아요 누른 작품</h2>
      </div>
      <div className="favorite">
        <div className="row-container">
          {movies.data.map((movie) => (
            <div className="item" key={movie.mno}>
              <div
                className="boxart-size-16x9 boxart-container boxart-rounded"
                onMouseOver={(e) => {
                  setMiniModal(true);
                  setMovieInfo(movie);
                  setCoordinate({
                    left:
                      window.pageXOffset +
                      e.target.getBoundingClientRect().left,
                    right:
                      window.pageXOffset +
                      e.target.getBoundingClientRect().right,
                    top:
                      window.pageYOffset + e.target.getBoundingClientRect().top,
                  });
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
      {/* 미니모달 영역 */}
      {miniModal ? (
        <div
          className="minimodal-container"
          style={ModalStyle}
          onMouseLeave={(e) => {
            // setMiniModal(false);
          }}
        >
          <MiniModal movieInfo={movieInfo} size={ModalStyle}/>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Like;
