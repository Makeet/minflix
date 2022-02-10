import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Like from "components/Like";
import axios from "axios";
import { ReactComponent as Loading } from 'images/loading.svg';
import Landing from "components/Landing";
import Login from "components/Login";


function App() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [banner, setBanner] = useState(null);
    const [login, setLogin] = useState(true);
    
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
      <div className="App">
        <Router basename="/">
          <Switch>
            <Route exact path="/login" component={Login}/>
            { login ? 
            <>
              <NavBar />
              <Route exact 
                path="/" 
                render={() => <Home movies={movies.data} banner={banner} />} /> 
            </> : <Landing />}
            <Route exact path="/like" component={Like}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
}
export default App;
