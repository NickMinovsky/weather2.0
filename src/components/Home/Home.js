import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import Today from "../Today/Today";
import Table from "../Forecast/Table";
class Home extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="md">
        <div>
          {/* <div className="current-weather">
            <div className="current-weather__circle">
              <h1>Tel Aviv</h1>
              <p>Sunny</p>
              <p>28 c</p>
            </div>
          </div> */}
          <Today />
          <div className="forecast-weather">
            <h1 className="subtitle">Your Weekley Forecast:</h1>
            <Table />
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
