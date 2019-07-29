import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { inputError } from "../../store/actions";
import searchItemAction from "../../store/actions";
import fetchApiAction from "../../services/FetchApi";
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
  };

  isInputValid = e => {
    const { inputError } = this.props;
    const re = /[a-zA-Z ]+/g;
    if (!re.test(e.key)) {
      inputError("Please use English letters only");
    } else {
      inputError(" ");
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { fetchApi, searchTerm } = this.props;
    fetchApi(searchTerm);
  };

  render() {
    const { error } = this.props;
    return (
      <div className="navbar">
        <form onSubmit={this.onSubmit}>
          <TextField
            onChange={this.onChange}
            onKeyPress={this.isInputValid}
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
  searchTerm: state.searchTerm.searchItem,
  error: state.errors.inputError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi: fetchApiAction,
      searchItem: searchItemAction,
      inputError: inputError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
