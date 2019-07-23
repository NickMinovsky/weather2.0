import React, { Component } from "react";
import Container from "@material-ui/core/Container";

import Today from "./Today/Today";
import Table from "./Table/Table";
class Home extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="md" className="main-container">
        <div>
          <Today />
          <div className="forecast-weather">
            <Table />
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
