import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Loading } from 'images/loading.svg';
import Landing from "./Landing";
import Like from "./Like";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [banner, setBanner] = useState(null);
    
    console.log("db call...");
  
    const apiCallMovies = async () => {
      setError(null);
      setLoading(true);
      setMovies(null);
  
      await axios
      .get("/api/all")
      .then((response) => {
        const random = Math.floor(
          Math.random() * (response.data.data.length - 1)
        );
          setBanner(response.data.data[random]);
          setMovies(response.data);
        })
        .catch((error) => {
          console.log("E>>>", error);
          setError(error);
        });
        setLoading(false);
    };
    
    useEffect(() => {
      apiCallMovies();
    }, []);
  
    if(loading) return <div><Loading/></div>
    if(error) return <div>에러발생</div>
    if(!movies) return null;

    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <div>
                        <Route exact path="/">
                            <NavBar />
                            <Home movies={movies.data} banner={banner} userObj={userObj} />
                        </Route>
                        <Route exact path="/like">
                            <Like userObj={userObj} refreshUser={refreshUser} / >
                        </Route>
                    </div>
                ) : (
                    <>
                        <Route exact path="/">
                            <Landing />
                        </Route> 
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </>
                )}
                <Footer />
            </Switch>
        </Router>
    );
};
export default AppRouter;