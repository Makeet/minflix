import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from 'components/Home';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
        <Footer />
      </Router>
    </div>
      );
    }
    
    export default App;