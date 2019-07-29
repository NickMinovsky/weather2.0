import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
} from "../actions/";

const initialState = {
  pending: false,
  data: {},
  error: ""
};

const dataReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: payload
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: error
      };
    default:
      return state;
  }
};

export const getDataSuccess = state => state.apiData;
export const getDataPending = state => state.pending;
export const getDataError = state => state.error;

export default dataReducer;
