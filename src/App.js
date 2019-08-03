import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Nav from "./components/Nav/Nav";
import Footer from "./containers/Footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Footer />
      </Router>
    );
  }
}

export default App;
