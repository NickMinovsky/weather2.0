import React, { Component } from "react";

import Home from "./components/Home/Home";
import Nav from "./containers/Nav/Nav";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
