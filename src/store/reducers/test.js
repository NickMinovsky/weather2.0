const test = (state = 0, { type, payload }) => {
  switch (type) {
    case "notify":
      return state + payload;
    default:
      return state;
  }
};

export default test;
