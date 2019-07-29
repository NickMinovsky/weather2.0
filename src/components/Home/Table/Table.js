import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import Loader from "../../../containers/Loader/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const ForecastTable = props => {
  const { data } = props;
  if (data.forecast === undefined) {
    return <Loader />;
  }
  return (
    <span>
      <h1 className="subtitle">Your Weekley Forecast:</h1>
      <Paper className="table">
        <Table className="table-main">
          <TableHead>
            <TableRow className="table-row">
              <TableCell>Day of the week</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Degress</TableCell>
              <TableCell align="right">Weather</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.forecast.forecastday.map((day, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {moment(day.date).format("dddd")}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      src={day.day.condition.icon}
                      alt="weather-icon"
                      className="weather-icon"
                    />
                  </TableCell>
                  <TableCell align="right">{day.day.maxtemp_c}</TableCell>
                  <TableCell align="right">{day.day.condition.text}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </span>
  );
};

const mapStateToProps = state => {
  return {
    data: state.apiData.data
  };
};
export default connect(mapStateToProps)(ForecastTable);
