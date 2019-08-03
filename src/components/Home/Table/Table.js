import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import TableItem from "./TableItem/TableItem";
import Grid from "@material-ui/core/Grid";
import "./Table.css";

const ForecastTable = props => {
  const { data } = props;
  if (data.forecast === undefined) {
    return <p> </p>;
  }
  return (
    <div className="current-weather">
      <h1 className="subtitle">Your Weekley Forecast:</h1>
      <Grid container className="grid">
        {data.forecast.forecastday.map((day, index) => {
          return (
            <Grid item className="current-table" lg={1} md={6} sm={12}>
              <TableItem
                className="table-item"
                key={index}
                day={moment(day.date).format("dddd")}
                weather={day.day.condition.text}
                icon={day.day.condition.icon}
                degree={day.day.maxtemp_c}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.apiData.data
  };
};
export default connect(mapStateToProps)(ForecastTable);
