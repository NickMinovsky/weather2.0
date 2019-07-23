import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import searchItemAction from "../../store/actions";
import getDataAction from "../../services/getData";
import TextField from "@material-ui/core/TextField";

class Nav extends Component {
  componentDidMount() {
    const { getData, searchTerm } = this.props;
    getData(searchTerm);
  }

  onChange = e => {
    const { searchItem } = this.props;
    searchItem(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    const { getData, searchTerm } = this.props;
    getData(searchTerm);
  };
  render() {
    return (
      <div className="navbar">
        <form onSubmit={this.onSubmit}>
          <TextField
            onChange={this.onChange}
            label="Search a city"
            type="search"
            margin="normal"
            helperText="Please use english letters only"
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
      getData: getDataAction,
      searchItem: searchItemAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
