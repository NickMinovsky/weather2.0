import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import Loader from "../../containers/Loader/Loader";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const ForecastTable = props => {
  const classes = useStyles();

  const { data } = props;
  if (data.forecast === undefined) {
    return <Loader />;
  }
  return (
    <span>
      <h1 className="subtitle">Your Weekley Forecast:</h1>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
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
                  <TableCell align="right">2</TableCell>
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
    data: state.ApiData.data
  };
};
export default connect(mapStateToProps)(ForecastTable);
