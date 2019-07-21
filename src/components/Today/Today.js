import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { addFav } from "../../store/actions";

export default function Today() {
  const [showAlert, toggleShowAlert] = useState(false);
  const [showAnimation, toggleShowAnimation] = useState("alert-off");
  const dispatch = useDispatch();

  return (
    <div className="current-weather">
      <div className="current-weather__circle">
        <h1 className="current-weather__circle-title">Tel Aviv</h1>
        <p className="current-weather__circle-desc">Sunny</p>
        <p className="current-weather__circle-degree">28 c</p>
        <Button
          onClick={() => {
            toggleShowAlert(true);
            toggleShowAnimation("alert");
            dispatch(addFav());
          }}
          variant="contained"
          color="primary"
          className="fav-btn"
        >
          Add
        </Button>
        <p className={showAnimation}>
          {showAlert ? "Added to favorites!" : ""}
        </p>
      </div>
    </div>
  );
}
