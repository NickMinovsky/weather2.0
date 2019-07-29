import { ADD_FAV, DELETE_FAV } from "../actions/";

const favoritesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return [...state, payload];
    case DELETE_FAV:
      return state.filter(city => city.name !== payload);
    default:
      return state;
  }
};
export default favoritesReducer;
