import React from "react";

import "./Loader.css";

export default function CircularIndeterminate() {
  return (
    <div className="loader">
      <div className="load-container">
        <svg className="svg" viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" />
        </svg>
        <p className="loader-title">Loading</p>
      </div>
    </div>
  );
}
