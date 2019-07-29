import { RELOAD } from "../actions/";

const initialState = {
  reload: false
};
const reloadReducer = (state = initialState, { type }) => {
  switch (type) {
    case RELOAD:
      return {
        reload: true
      };
    default:
      return state;
  }
};

export default reloadReducer;
