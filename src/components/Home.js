import React, { useState, useEffect } from "react";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



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
        setError(error);
      });
      setLoading(false);
  };
  
  useEffect(() => {
    apiCallMovies();
  }, []);

  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러발생</div>
  if(!movies) return null;


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
              {banner.title}
            </h1>
            {/* div 2 buttons */}
            <h1 className="banner__description">
              {banner.synopsis}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button play"><FontAwesomeIcon icon={faPlay} /> &nbsp; 재생</button>
              <button className="banner__button board"><FontAwesomeIcon icon={faInfo} /> &nbsp;  상세 정보</button>
            </div>
            {/* description */}
          </div>
          <div className="banner__fadeBottom"></div>
        </div>

      {/* ----------------------slider------------------------- */}
        <div className="recommend">
          <h1>지금 뜨는 작품</h1>
          <div className="swiper-container">

            <Swiper
              modules={ [Navigation] }
              spaceBetween={50}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              <span className="swiper-button-prev arrow__btn" role="button" aria-aria-label="이전 콘텐츠 보기">‹</span>

              {movies.data.map((movie) => (
                <SwiperSlide key={movie.mno}>
                  <img src={movie.poster} alt={`poster of ${movie.title}`} />
                </SwiperSlide>
              ))}

              <span className="swiper-button-next arrow__btn" role="button" aria-aria-label="콘텐츠 더 보기">›</span>
            </Swiper>
            
        </div>
      </div> 
      
    </>
  )
}

export default Home;
