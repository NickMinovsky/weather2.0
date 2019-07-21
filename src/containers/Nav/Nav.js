import React, { Component } from "react";
import searchItemAction from "../../store/actions/";
import getDataAction from "../../services/getData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
        <input onChange={this.onChange} type="text" placeholder="search" />
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
