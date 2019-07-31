import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import "./Table.css";
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
    return <p> </p>;
  }
  return (
    <div className="current-table">
      <h1 className="subtitle">Your Weekley Forecast:</h1>
      <Paper className="table">
        <Table className="table-main" size="small">
          <TableHead>
            <TableRow className="table-row">
              <TableCell>Day</TableCell>
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
                  <TableCell align="right">
                    {day.day.maxtemp_c} <sup>o</sup>c
                  </TableCell>
                  <TableCell align="right">{day.day.condition.text} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.apiData.data
  };
};
export default connect(mapStateToProps)(ForecastTable);
