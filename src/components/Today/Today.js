import React, { useState } from "react";

export default function Today() {
  const [todayAlert, setTodayAlert] = useState("");

  return (
    <div className="current-weather">
      <div className="current-weather__circle">
        <h1>Tel Aviv</h1>
        <p>Sunny</p>
        <p>28 c</p>
        <button
          onClick={() => {
            setTodayAlert("Added to Favorites");
          }}
        >
          Click Me
        </button>
        <p className="alert">{todayAlert}</p>
      </div>
    </div>
  );
}
