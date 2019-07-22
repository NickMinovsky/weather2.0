import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import searchItemAction from "../../store/actions/";
import getDataAction from "../../services/getData";
import TextField from "@material-ui/core/TextField";

class Nav extends Component {
  state = {};

  onChange = e => {
    this.props.searchItem(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.props;
    this.props.getData(searchTerm);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          onChange={this.onChange}
          id="standard-search"
          label="Search a city"
          type="search"
          margin="normal"
          helperText="Please use english letters only"
        />
      </form>
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
