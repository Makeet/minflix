import React from "react";
import logo from "images/logos/logo.png";

function Landing() {
  
  return (
    <>
        <header className="showcase">
            <div className="showcase-top">
				<img src={logo} alt="" />
				<a href="#" className="btn btn-rounded">로그인</a>
			</div>
			<div className="showcase-content">
				<h1>영화와 시리즈를 무제한으로.</h1>
				<p>다양한 디바이스에서 시청하세요.</p>
                <a href="#" className="btn btn-xl"
					> 시작하기 › </a>
			</div>
		</header>
    </>
  )
}

export default Landing;
