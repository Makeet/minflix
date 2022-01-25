import React from "react";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner(props) {
    return(
      <div 
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.banner?.poster})`,
        backgroundPosition: "center center",
        backgroundColor: "rgba(0,0,0,0.2)"
      }}
      >
          <div className="banner__top"></div>
          <div className="banner__contents">
            {/* title */}
            <h1 className="banner__title">
              {props.banner?.title}
            </h1>
            {/* div 2 buttons */}
            <h1 className="banner__description">
              {props.banner?.synopsis}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button play"><FontAwesomeIcon icon={faPlay} /> &nbsp; 재생</button>
              <button className="banner__button board"><FontAwesomeIcon icon={faInfo} /> &nbsp;  상세 정보</button>
            </div>
            {/* description */}
            </div>
            <div className="banner__fadeBottom"></div>
        </div>
    )
    
  }
  

  
  export default Banner;