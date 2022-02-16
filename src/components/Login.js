import React, { useState } from "react";
import logo from "images/logos/logo.png";
import gogl_logo from "images/logos/google_logo.png";
import { authService } from "components/Fbase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useHistory } from "react-router";

function Login() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const history = useHistory();
       
        const onChange = (event) => {
            const { target: {name, value} } = event;
      
            //name이 email과 같으면 email input에 값 setEmail
            if (name === "email") {
                setEmail(value);
                //password와 같으면 password input에 값 setPassword
              } else if (name === "password"){
                  setPassword(value);
              }
          };

          const onSocialClick = async (event) => {
            console.log(event.target.name);
            const {
                target:{name},
            } = event;
    
            let provider;
    
            if(name == "google") {
                console.log("google");
                provider = new GoogleAuthProvider();
            }
    
            await signInWithPopup(authService, provider);
            history.push("/");
        };

    
        const onSubmit = async(event) => {
            event.preventDefault();  
            try {
                let data;
                //로그인
                data = await signInWithEmailAndPassword(authService, email, password);
    
                history.push("/");
                // console.log(data);
            } catch(error) {
                setError(error.message);
            }
        };

        if (error == "Firebase: Error (auth/user-not-found)."){
            setError("이 이메일 주소를 사용하는 계정을 찾을 수 없습니다.다시 시도하시거나 새로운 계정을 등록하세요.");
        }else if(error == "Firebase: Error (auth/wrong-password)."){
            setError("비밀번호를 잘못 입력하셨습니다. 다시 입력하시거나 비밀번호를 재설정하세요.");
        }else if(error == "Firebase: Error (auth/invalid-email)."){
            setError("이메일 주소를 입력해주세요.");
        }
  
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
                <form onSubmit={onSubmit}>
                    <h1>로그인</h1>
                    <div className="info">
                        <input name="email" className="email" type="email" placeholder="이메일 주소 또는 전화번호" onChange={onChange} /> <br />
                        <input name="password" className="email" type="password" placeholder="비밀번호" onChange={onChange} />
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
                    {error && <span className="authError">{error}</span>}
                </form>

            </div>
            
            <div className="gogl">
                <img src={gogl_logo} className="gogl-icon" />
                <a href="#" onClick={onSocialClick} name="google">Google로 로그인</a>
            </div>
            <div className="signup">
                <p>Minflix 회원이 아닌가요?</p>
                <a href="join">지금 가입하세요</a>
            </div>
        </div>
   
        </header>
    </>
  )
}

export default Login;
