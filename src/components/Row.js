import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Row(props) {

    return (  
        <>
            <div className="recommend">
              <h1>{props.content}</h1>
              <div className="swiper-container">
    
                <Swiper
                  modules={ [Navigation] }
                  spaceBetween={10}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  breakpoints= {{
                    0: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    499: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                    799: { 
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                    1099: {
                      slidesPerView: 5,
                      slidesPerGroup: 5,
                    },
                    1399: {
                      slidesPerView: 6,
                      slidesPerGroup: 6,
                    },
                  }}
                >
                  <div className="swiper-button-prev arrow__btn" role="button" label="이전 콘텐츠 보기">‹</div>
                  {props.category.map((movie) => (
                    <SwiperSlide key={movie.mno}>
                      <img src={movie.poster} alt={`poster of ${movie.title}`} />
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-next arrow__btn" role="button" label="콘텐츠 더 보기">›</div>
                </Swiper>
                
            </div>
          </div> 
          
        </>
      )

}

export default Row;
