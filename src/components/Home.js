import React, { useState, useEffect } from "react";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Home() {
  const [banner, setBanner] = useState(null);
  
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("db call...");
  const apiCallMovies = async () => {
    setError(null);
    setLoading(true);
    setMovies(null);

    
    await axios
    .get("/api/main")
    .then((response) => {
        const random = Math.floor(
          Math.random() * (response.data.data.length - 1)
        );
        console.log(response.data);
        console.log(response.data.data[random]);
        setBanner(response.data.data[random]);
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


  // <div 
  //   className="banner"
  //   style={{
  //     backgroundSize: "cover",
  //     // backgroundImage: `url("${base_url}${
  //     //   movie.backdrop_path || defaultImage
  //     // }")`,
  //     backgroundImage: "url('https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp')",
  //     backgroundPosition: "center center",
  //     backgroundColor: "rgba(0,0,0,0.2)"
  //   }}
  // >
  //   <div className="banner__top"></div>
  //   <div className="banner__contents">
  //     {/* title */}
  //     <h1 className="banner__title">
  //       {/* {movie?.title || movie?.name || movie?.original_name} */}
  //       이것은 제목이다
  //     </h1>
  //     {/* div 2 buttons */}
  //     <h1 className="banner__description">
  //       {/* {truncate(movie?.overview, 200)} */}
  //       이것은 영화 상세설명?줄거리?이다
  //     </h1>
  //     <div className="banner__buttons">
  //       <button className="banner__button play"><FontAwesomeIcon icon={faPlay} /> &nbsp; 재생</button>
  //       <button className="banner__button board"><FontAwesomeIcon icon={faInfo} /> &nbsp;  상세 정보</button>
  //     </div>
  //     {/* description */}
  //   </div>
  //   <div className="banner__fadeBottom"></div>
  // </div>


  // <div className="recommend">
  //   <h1>지금 뜨는 작품</h1>
  //   <div class="wrapper">
  //     <section id="section1">
  //       <a href="#section3" class="arrow__btn">‹</a>
        
  //       <div class="item">
  //       <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABVxuRB932hvre-XP0gh6ar5ztoR3Oe3QjKHkyvcDnRak2MKXOrx5H7mFQSvggefMFOppwEs7ZCCpiqrJ_CYGvtvYB9NpU4SWUtNO6uV2u-DTID267AcHjHcGvGBQJ1ufddDkxcGOZyi5MlOQ5QUmBun4652FbYUnib3zMYQDgcna_Pvz8y_HO5fbokxezrRR1JZAAiqFSQ.jpg" alt="Describe Image" />
  //     </div>
  //       <a href="#section1" class="arrow__btn">›</a>
  //     </section>
  //   </div>
  //  </div> 


// {movies.data.map((movie) => (
//   <div key={movie.mno} class="item">
//     <img src={movie.poster} alt={`poster of ${movie.title}`} />
//   </div>
// ))}

  return (
    <>

      <div 
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${banner.poster})`,
            backgroundPosition: "center center",
            backgroundColor: "rgba(0,0,0,0.2)"
          }}
        >
          <div className="banner__top"></div>
          <div className="banner__contents">
            {/* title */}
            <h1 className="banner__title">
              ${banner.title}
            </h1>
            {/* div 2 buttons */}
            <h1 className="banner__description">
              ${banner.synopsis}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button play"><FontAwesomeIcon icon={faPlay} /> &nbsp; 재생</button>
              <button className="banner__button board"><FontAwesomeIcon icon={faInfo} /> &nbsp;  상세 정보</button>
            </div>
            {/* description */}
          </div>
          <div className="banner__fadeBottom"></div>
        </div>



    </>
  )

}

export default Home;
