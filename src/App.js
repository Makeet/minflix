import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "components/Home";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: [],
    };
  }
  componentDidMount() {
    this._getDatabase();
  }
  _getDatabase = async () => {
    const res = await axios.get("/api/test");
    this.setState({ data : res.data });
    console.log(this.state.data);
  };
  render() {
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
}
export default App;
