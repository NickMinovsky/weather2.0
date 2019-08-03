import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Loader.css";
const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className="current-weather__circle">
      <div class="fulfilling-bouncing-circle-spinner">
        <div class="circle" />
        <div class="orbit" />
        <p />
      </div>
    </div>
  );
}
