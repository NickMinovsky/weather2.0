import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import Today from "./Today/Today";
import Table from "./Table/Table";
import Loader from "../../containers/Loader/Loader";

class Home extends Component {
  state = {};
  render() {
    const { pending } = this.props;
    return (
      <Container maxWidth="md" className="main-container">
        {!pending ? (
          <div>
            <Today /> <Table />
          </div>
        ) : (
          <Loader />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.fromAPI.pending
});

export default connect(mapStateToProps)(Home);
