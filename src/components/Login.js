import React from "react";
import logo from "images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
// import { faAngleDown, faFacebookSquare } from "@fortawesome/free-solid-svg-icons";

function Login() {
  
  return (
    <>
    <header className="showcase">

        <div className="logo">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>

        <div className="login-showcase-content">
            <div className="formm">
                <form>
                    <h1>로그인</h1>
                    <div className="info">
                        <input className="email" type="email" placeholder="이메일 주소 또는 전화번호" /> <br />
                        <input className="email" type="password" placeholder="비밀번호" />
                    </div>
                    <div className="login-btn">
                        <button className="btn-primary" type="submit">로그인</button>
                    </div>
                    <div className="help">
                        <div>
                            <input value="true" type="checkbox" /><label>로그인 정보 저장</label>
                        </div>

                        <a href="https://www.netflix.com/dz-en/LoginHelp">도움이 필요하신가요?</a>
                    
                    </div>

                </form>

            </div>
            
            <div className="fcbk">
                <FontAwesomeIcon icon={faFacebookSquare} className="fcbk-icon" />
                <a href="https://facebook.com">
                    <p>Facebook으로 로그인</p>
                </a>
            </div>
            <div className="signup">
                <p>Minflix 회원이 아닌가요?</p>
                <a href="#">지금 가입하세요</a>
            </div>
        </div>
   
        </header>
    </>
  )
}

export default Login;
