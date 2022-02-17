import React, { useState } from "react";
import logo from "images/logos/logo.png";
import { authService } from "components/Fbase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from "react-router";

function Join() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [rePassword, setRePassword] = useState("");
        const [nickName, setNickName] = useState("");
        const [error, setError] = useState("");
        const history = useHistory();
       
        const onChange = (event) => {
            const { target: {name, value} } = event;
      
            if (name === "email") {
                setEmail(value);
            } else if (name === "password"){
                setPassword(value);
            } else if (name === "nickName"){
                setNickName(value);
            } else if (name === "rePassword"){
                setRePassword(value);
            }
        };

    
        const onSubmit = async(event) => {
            event.preventDefault();  
            try {
                let data;
                //회원가입
                if(password == rePassword){
                    data = await createUserWithEmailAndPassword(authService, email, password, nickName);
        
                    history.push("/");
                }else {
                    setError("비밀번호가 일치하지 않습니다.");
                }
                // console.log(data);
            } catch(error) {
                setError(error.message);
            }
        };

        if (error == "Firebase: Error (auth/email-already-in-use)."){
            setError("이미 가입한 이메일이 있습니다.");
        }else if(error == "Firebase: Error (auth/invalid-email)."){
            setError("이메일 형식이 잘못 되었습니다.");
        }else if(error == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            setError("비밀번호를 6자리 이상 작성해주세요.");
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
                    <h1>회원가입</h1>
                    <div className="info join">
                        <input name="nickName" className="email join" type="text" placeholder="이름" onChange={onChange} />
                        <br />
                        <input name="email" className="email join" type="email" placeholder="이메일 주소 또는 전화번호" onChange={onChange} /> <br />
                        <input name="password" className="email join" type="password" placeholder="비밀번호" onChange={onChange} />
                        <br />
                        <input name="rePassword" className="email join" type="password" placeholder="비밀번호 재입력" onChange={onChange} />
                    </div>

                    <div className="login-btn">
                        <button className="btn-primary" type="submit">가입하기</button>
                    </div>
                    {error && <span className="authError">{error}</span>}
                </form>

            </div>
            
            <div className="signup">
                <p>이미 Minflix 회원이신가요?</p>
                <a href="/login">로그인</a>
            </div>
        </div>
   
        </header>
    </>
  )
}

export default Join;
