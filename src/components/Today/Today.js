import React from "react";
import { connect } from "react-redux";

const Today = props => {
  const { data } = props;
  if (data.location === undefined) {
    return <h1>error</h1>;
  }
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
            console.log(data);
          }}
        >
          qweqweqwe
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.ApiData.data
  };
};

export default connect(mapStateToProps)(Today);
