import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from 'components/Home';
import NavBar from 'components/NavBar';

function App() {
  return (
    <div>
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </Router>
    </div>
      );
    }
    
    export default App;