import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import getDataAction from "./services/getData";
import {
  getDataPending,
  getDataSuccess,
  getDataError
} from "./store/reducers/dataReducer";

import Home from "./components/Home/Home";
import Nav from "./containers/Nav/Nav";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData("tel-aviv");
  }

  isLoading() {
    const { pending } = this.props;
    if (pending === false) {
      return false;
    }
    return true;
  }
  render() {
    if (!this.isLoading()) {
      return <h1>error</h1>;
    }
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getDataError(state),
  data: getDataSuccess(state),
  pending: getDataPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData: getDataAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
