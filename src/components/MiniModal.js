import React from "react";

import { ReactComponent as MaturityAll } from "images/maturity/all.svg";
import { ReactComponent as Maturity12 } from "images/maturity/12.svg";
import { ReactComponent as Maturity15 } from "images/maturity/15.svg";
import { ReactComponent as Maturity18 } from "images/maturity/18.svg";
import { ReactComponent as ThumbUpEmpty } from "images/modals/thumbUpEmpty.svg";
import { ReactComponent as ThumbUpFilled } from "images/modals/thumbUpFilled.svg";
import { ReactComponent as ThumbDownEmpty } from "images/modals/thumbDownEmpty.svg";
import { ReactComponent as ThumbDownFilled } from "images/modals/thumbDownFilled.svg";
import { ReactComponent as MiniPlay } from "images/modals/miniPlay.svg";
import { ReactComponent as AddFavorite } from "images/modals/add.svg";

function MiniModal({ movieInfo, size }) {

  const modalinfoStyle = {
    opacity: "1",
    transform: "none",
    padding: "1em"
  };
  const metadatAndControls = {
    opacity: "1",
  };
  
  const seperateor = (index) => {
    const result = [];
    if (index !== 0)
      result.push(<span className="characteristic-separator"></span>);
    return result;
  };
  
  const itemList = (characteristic) => {
    const result = [];
    for (let i = 0; i < characteristic.split(",").length; i++) {
      if (i >= 3) {
        break;
      }
      result.push(
        <div className="characteristic-item">
          {seperateor(i)}
          <span className="characteristic-text">
            {characteristic.split(",")[i]}
          </span>
        </div>
      );
    }
    return result;
  };

  return (
    <div className="minimodal-wrapper" style={size}>
      <div className="minimodal-poster-size-16x9 minimodal-poster-container">
        <img src={movieInfo.poster} alt="poster" />
      </div>
      <div className="miniodal-info-container" style={modalinfoStyle}>
        <a href={`/detailedModal/` + movieInfo.mno} tabIndex="-1">
          <div className="mini-modal-container">
            <div className="previewModal--info-container">
              <div className="previewModal--metadatAndControls mini-modal has-smaller-buttons">
                <div className="minimodal-metadata">
                  <div className="buttons">
                    <div className="round">
                      <button className="round" tabIndex="-1" type="button">
                        <div className="ltr-1ksxkn9">
                          <div
                            className="small ltr-18dhnor"
                            role="presentation"
                          >
                            <MiniPlay />
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="buttons">
                      <button className="round" data-uia="thumbsUp-button">
                        <div className="small ltr-18dhnor" role="presentation">
                          <AddFavorite />
                        </div>
                      </button>
                      <button
                        aria-label="'좋아요'로 평가하기"
                        className="color-supplementary hasIcon round ltr-1knzl35"
                        data-uia="thumbsUp-button"
                        type="button"
                      >
                        <div className="round">
                          <div
                            className="small ltr-18dhnor"
                            role="presentation"
                          >
                            <ThumbUpEmpty />
                          </div>
                        </div>
                      </button>
                      <button
                        aria-label="'맘에 안 들어요'로 평가하기"
                        className="color-supplementary hasIcon round ltr-1knzl35"
                        data-uia="thumbsDown-button"
                        type="button"
                      >
                        <div className="round">
                          <div
                            className="small ltr-18dhnor"
                            role="presentation"
                          >
                            <ThumbDownEmpty />
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="buttons buttons-right">
                      <button
                        aria-label="expand to detail modal"
                        className="color-supplementary hasIcon round ltr-1knzl35"
                        data-uia="expand-to-detail-button"
                        type="button"
                      >
                        <div className="ltr-1ksxkn9">
                          <div
                            className="small ltr-18dhnor"
                            role="presentation"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="Hawkins-Icon Hawkins-Icon-Standard"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    className="previewModal--metadatAndControls-info"
                    style={metadatAndControls}
                  >
                    <div>
                      <div
                        data-uia="videoMetadata--container"
                        className="videoMetadata--container"
                      >
                        <div className="videoMetadata--first-line">
                          <span className="match-score-wrapper">
                            <div className="show-match-score rating-inner">
                              <div className="meta-thumb-container thumb-down">
                                <ThumbDownFilled />
                              </div>
                              <div className="meta-thumb-container thumb-up">
                                <ThumbUpFilled />
                              </div>
                            </div>
                          </span>
                        </div>
                        <div className="videoMetadata--second-line">
                          <span className="maturity-rating ">
                            <span>
                              {movieInfo.maturity.split("세")[0] === "12" ? (
                                <Maturity12 width="24px" height="24px" />
                              ) : movieInfo.maturity.split("세")[0] === "15" ? (
                                <Maturity15 width="24px" height="24px" />
                              ) : movieInfo.maturity.split("세")[0] === "18" ? (
                                <Maturity18 width="24px" height="24px" />
                              ) : (
                                <MaturityAll width="24px" height="24px" />
                              )}
                            </span>
                          </span>
                          <span className="duration">{movieInfo.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="previewModal--metadatAndControls-tags-container"
                    style={metadatAndControls}
                  >
                    <div className="characteristic-tags">
                      <div className="characteristic-list">
                        {itemList(movieInfo.characteristic)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default MiniModal;
