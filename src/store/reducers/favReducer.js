const favReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return [...state, payload];
    default:
      return state;
  }
};
export default favReducer;
