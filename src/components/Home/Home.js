import React, { Component } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

import Today from "./Today/Today";
import Table from "./Table/Table";
import Loader from "../../containers/Loader/Loader";
import Container from "@material-ui/core/Container";

class Home extends Component {
  state = {};

  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    const { pending } = this.props;
    return (
      <Container maxWidth="xl" className="main-container">
        {!pending ? (
          <div className="god-container">
            <div className="test" data-aos="fade-up">
              <Today />
            </div>{" "}
            <div data-aos="fade-down">
              <Table />{" "}
            </div>
          </div>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.apiData.pending
});

export default connect(mapStateToProps)(Home);
