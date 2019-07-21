const favReducer = (state = 0, { type }) => {
  switch (type) {
    case "ADD_FAV":
      return state + 1;
    default:
      return state;
  }
};

export default favReducer;
