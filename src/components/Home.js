import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import Landing from "./Landing";

function Home(props) {
  // const popularMovies = []; //좋아요 버튼 처리 후 개발예정
  const documentaryMovies = [];
  const krMovies = [];
  const overseasMovies = [];
  

  props.movies.map((movie)=>(
    movie.genres.indexOf("다큐멘터리") != -1? documentaryMovies.push(movie):""
  ));  
  props.movies.map((movie)=>(
    movie.genres.indexOf("한국") != -1? krMovies.push(movie):overseasMovies.push(movie)
  ));
  
  return (
    <>
      <Banner banner={props.banner} />
      {/* <Rows category={popularMovies} content={"지금 뜨는 콘텐츠"} /> */}
      <Row category={documentaryMovies} content={"다큐멘터리 콘텐츠"} />
      <Row category={krMovies} content={"한국 콘텐츠"} />
      <Row category={overseasMovies} content={"해외 콘텐츠"} />
    </>
  )
}

export default Home;
