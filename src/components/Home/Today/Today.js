import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFav } from "../../../store/actions/";

const Today = props => {
  const { data } = props;
  if (data.location === undefined) {
    return <h1>error</h1>;
  }

  const addFavHandler = () => {
    const cityName = data.location.name;
    const { favList } = props;
    if (!favList.includes(cityName)) {
      props.addFav(cityName);
    } else {
      console.log("already in favs");
    }
  };
  return (
    <div className="current-weather">
      <div className="current-weather__circle">
        <h1 className="current-weather__circle-title">{data.location.name}</h1>
        <p className="current-weather__circle-desc">
          {data.current.condition.text}
        </p>
        <p className="current-weather__circle-degree">
          {data.current.temp_c} <sup>o</sup>c
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
  data: state.ApiData.data,
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
