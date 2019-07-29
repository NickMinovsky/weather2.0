import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { deleteFav, reLoad } from "../../../store/actions/";
import fetchApiAction from "../../../services/FetchApi";
import searchItemAction from "../../../store/actions/";

const FavItem = props => {
  const searchFav = async cityId => {
    const { fetchApi, reLoad } = props;
    try {
      await fetchApi(cityId);
      reLoad();
    } catch (error) {
      console.log(error.messge);
    }
  };
  const { reloadState } = props;
  if (reloadState) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>
        {props.temp} <sup>o</sup>c
      </p>
      <p>{props.condition}</p>
      <button
        onClick={() => {
          props.deleteFav(props.name);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          searchFav(props.name);
        }}
      >
        Search
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm.searchItem,
  reloadState: state.redirect.reload
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteFav: deleteFav,
      searchItem: searchItemAction,
      fetchApi: fetchApiAction,
      reLoad: reLoad
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavItem);
