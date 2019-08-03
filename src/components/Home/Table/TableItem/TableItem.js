import React from "react";

import "./TableItem.css";

const TableItem = props => {
  return (
    <div className="table-item">
      <p className="table-day">{props.day}</p>
      <p className="table-weather">{props.weather}</p>
      <img className="table-icon" src={props.icon} alt="icon" />
      <p className="table-degree">{props.degree}°C</p>
    </div>
  );
};

export default TableItem;
