import React from "react";

const FavItem = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.temp}</p>
      <p>{props.condition}</p>
    </div>
  );
};

export default FavItem;
