import React from "react";
import { connect } from "react-redux";

import FavItem from "./FavItem/FavItem";

const Favorites = props => {
  return (
    <div>
      <p>welcome to favorites</p>
      <ul>
        {props.favList.map(city => {
          return (
            <li>
              <FavItem
                name={city.name}
                temp={city.temp}
                condition={city.condition}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  favList: state.favoritesList
});

export default connect(mapStateToProps)(Favorites);
