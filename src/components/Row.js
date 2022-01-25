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
                  slidesPerView={6}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                >
                  <span className="swiper-button-prev arrow__btn" role="button" aria-aria-label="이전 콘텐츠 보기">‹</span>
    
                  {props.category.map((movie) => (
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

export default Row;
