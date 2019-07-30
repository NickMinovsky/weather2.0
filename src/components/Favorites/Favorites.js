import React from "react";
import { connect } from "react-redux";

import FavItem from "./FavItem/FavItem";
import Container from "@material-ui/core/Container";

const Favorites = props => {
  const { favList } = props;
  return (
    <Container maxWidth="md" className="main-container">
      <div>
        <p>
          {favList.length === 0 ? "You have no favorites" : "Your favorites"}
        </p>
        <ul>
          {favList.map((city, index) => {
            return (
              <li>
                <FavItem
                  key={index}
                  name={city.name}
                  temp={city.temp}
                  condition={city.condition}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  favList: state.favoritesList
});

export default connect(mapStateToProps)(Favorites);
