import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFav } from "../../../store/actions/";
import isAdded from "../../../services/isAdded";

const Today = props => {
  const { data } = props;
  if (data.location === undefined) {
    return <h1>Loading...</h1>;
  }

  const addFavHandler = () => {
    const { current, location } = data;
    const { favList, addFav } = props;
    const favCityData = {
      name: location.name,
      temp: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon
    };
    if (!isAdded(favList, location.name)) {
      addFav(favCityData);
    } else {
      console.log("already in");
    }
  };

  const { current, location } = data;
  return (
    <div className="current-weather">
      <div className="current-weather__circle">
        <h1 className="current-weather__circle-title">{location.name}</h1>
        <p className="current-weather__circle-desc">{current.condition.text}</p>
        <p className="current-weather__circle-degree">
          {current.temp_c} <sup>o</sup>c
        </p>
        <button
          onClick={() => {
            addFavHandler();
          }}
        >
          Add Fav
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.fromAPI.data,
  favList: state.favoritesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addFav: addFav
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
