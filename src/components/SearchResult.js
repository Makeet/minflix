import React from "react";

function searchResults(props) {
    const result = props.searchResults;

    return (
        <>
        <div className="sub-header"></div>
        <div className="favorite">
            <div className="row-container">
                {props.movies.map((movie) => (
                    movie.title.indexOf(result) != -1? 
                    <>
                        <div className="item" key={movie.mno}>
                            <div
                                className="boxart-size-16x9 boxart-container boxart-rounded"
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
                    </>
                :<></>))}
            </div>
        </div>
        </>
    );
}

export default searchResults;
