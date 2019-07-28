import { INPUT_ERROR, FAV_ERROR } from "../actions/";

const initialState = {
  inputError: " ",
  favError: " "
};

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INPUT_ERROR:
      return {
        inputError: payload
      };
    case FAV_ERROR:
      return {
        favError: payload
      };
    default:
      return state;
  }
};
export default errorReducer;
