import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { addFav } from "../../store/actions";

export default function Today() {
  const [showAlert, toggleShowAlert] = useState(false);
  const [showAnimation, toggleShowAnimation] = useState("alert-off");
  const data = useSelector(state => state.ApiData);
  const dispatch = useDispatch();

  if (data.data.location === undefined) {
    return <h1>test</h1>;
  }

  return (
    <div className="current-weather">
      <div className="current-weather__circle">
        <h1 className="current-weather__circle-title">
          {data.data.location.name}
        </h1>
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
