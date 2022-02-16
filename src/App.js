import React, { useState, useEffect } from "react";
import "./App.css";
import AppRouter from "components/Router";
import {authService} from "components/Fbase";


function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
      authService.onAuthStateChanged((user) => {
        if(user){
          setIsLoggedIn(true);
          setUserObj(user);
        } else {
          setIsLoggedIn(false);
        }
  
        setInit(true);
      });
    }, []);
  
    const refreshUser = () => {
      const user = authService.currentUser;
      setUserObj({ ...user });
      setUserObj(user);
    }
  
    return (
      <>
        {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
      </>
    );
}
export default App;
