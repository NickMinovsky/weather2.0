import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteFav } from "../../../store/actions/";

const FavItem = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.temp}</p>
      <p>{props.condition}</p>
      <button
        onClick={() => {
          props.deleteFav(props.name);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteFav: deleteFav
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(FavItem);
