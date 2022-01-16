import React from "react";

function MiniModal({ movieInfo, coordinate }) {
  console.log(coordinate);
  let topcoordinate=coordinate[1]-250<=0?"60px":coordinate[1]-250
  const tempStyle={
    display:"inline-block",
    width:"300px",
    height:"500px",
    left: coordinate[0],
    top: topcoordinate
  }
  return (

    <div className="minimodal-container" style={tempStyle}>
      <div className="minimodal">
        <div className="minimodal-poster">
          <img src={movieInfo.poster} alt="poster" />
        </div>
        <div className="minimodal-info">
          <div className="buttons-control">
            <div className="buttons">
              <button className="round" data-uia="add-to-my-list">
                <div>
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
                      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="buttons">
              <button className="round" data-uia="thumbsUp-button">
                <div>
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
                      d="M9.97014 1C8.88206 1 8 1.88206 8 2.97014V5.76393L5.8023 10.1593L2.72528 11.0385C2.29598 11.1611 2 11.5535 2 12V19C2 19.4465 2.29598 19.8389 2.72528 19.9615L6.17609 20.9475L6.84053 21.2132C8.13985 21.733 9.52641 22 10.9258 22H16.7086C18.5124 22 20.0931 20.7927 20.5677 19.0525L21.9313 14.0525C22.6253 11.5079 20.7097 9 18.0722 9H14.2808L14.7276 7.21268C14.9267 6.41648 14.9267 5.58352 14.7276 4.78732L14.705 4.69686C14.1618 2.52419 12.2097 1 9.97014 1ZM9.78885 6.65836C9.92771 6.38065 10 6.07442 10 5.76393V3.00015C11.3093 3.01358 12.4465 3.90926 12.7647 5.18193L12.7873 5.27239C12.9068 5.75011 12.9068 6.24989 12.7873 6.72761L12.0299 9.75746L11.7192 11H13H18.0722C19.391 11 20.3488 12.254 20.0018 13.5262L18.6381 18.5262C18.4008 19.3964 17.6105 20 16.7086 20H10.9258C9.78085 20 8.64639 19.7815 7.58331 19.3563L6.87139 19.0715C6.83975 19.0589 6.80749 19.0478 6.77472 19.0385L4 18.2457V12.7543L6.35174 12.0824C6.89079 11.9284 7.34044 11.5552 7.59116 11.0538L9.78885 6.65836Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="buttons">
              <button className="round" data-uia="thumbsDown-button">
                <div>
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
                      d="M14.0302 23C15.1182 23 16.0003 22.1179 16.0003 21.0299V18.2361L18.198 13.8407L21.275 12.9615C21.7043 12.8389 22.0003 12.4465 22.0003 12V5C22.0003 4.55352 21.7043 4.16113 21.275 4.03848L17.8242 3.05253L17.1598 2.78676C15.8604 2.26703 14.4739 2 13.0745 2H7.29168C5.48788 2 3.90724 3.20728 3.43263 4.94753L2.06899 9.94753C1.37502 12.4921 3.29055 15 5.92805 15H9.71952L9.27269 16.7873C9.07364 17.5835 9.07364 18.4165 9.27269 19.2127L9.2953 19.3031C9.83847 21.4758 11.7906 23 14.0302 23ZM14.2114 17.3416C14.0726 17.6194 14.0003 17.9256 14.0003 18.2361V20.9998C12.691 20.9864 11.5538 20.0907 11.2356 18.8181L11.213 18.7276C11.0935 18.2499 11.0935 17.7501 11.213 17.2724L11.9704 14.2425L12.2811 13H11.0003H5.92805C4.6093 13 3.65153 11.746 3.99852 10.4738L5.36215 5.47376C5.59946 4.60364 6.38978 4 7.29168 4H13.0745C14.2194 4 15.3539 4.21848 16.417 4.64371L17.1289 4.92848C17.1605 4.94113 17.1928 4.95216 17.2256 4.96152L20.0003 5.7543V11.2457L17.6485 11.9176C17.1095 12.0716 16.6599 12.4448 16.4091 12.9462L14.2114 17.3416Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MiniModal;
