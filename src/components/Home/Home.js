import React, { Component } from "react";
import { connect } from "react-redux";

import Today from "./Today/Today";
import Table from "./Table/Table";
import Loader from "../../containers/Loader/Loader";
import Container from "@material-ui/core/Container";

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
