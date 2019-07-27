import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import searchItemAction from "../../store/actions";
import fetchApiAction from "../../services/fetchApi";
import isInputValid from "../../services/inputValidation";
import TextField from "@material-ui/core/TextField";

class Nav extends Component {
  componentDidMount() {
    const { fetchApi, searchTerm } = this.props;
    fetchApi(searchTerm);
  }

  onChange = e => {
    const { searchItem } = this.props;
    const input = e.target.value;
    searchItem(input);
    if (isInputValid(input)) {
      console.log("worked");
    } else {
      console.log("didnot work");
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { fetchApi, searchTerm } = this.props;
    fetchApi(searchTerm);
  };

  render() {
    const error = "hello";
    return (
      <div className="navbar">
        <form onSubmit={this.onSubmit}>
          <TextField
            onChange={this.onChange}
            label="Search a city"
            type="search"
            margin="normal"
            helperText={error}
          />
        </form>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favs</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm.searchItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi: fetchApiAction,
      searchItem: searchItemAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
