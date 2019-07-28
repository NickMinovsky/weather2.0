import { ADD_FAV, DELETE_ITEM } from "../actions/";

const favoritesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return [...state, payload];
    case DELETE_ITEM:
      return state.filter(city => city.name !== payload);
    default:
      return state;
  }
};
export default favoritesReducer;
