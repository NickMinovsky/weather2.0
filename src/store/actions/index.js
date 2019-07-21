export const ADD_FAV = "ADD_FAV";
export const GET_DATA_PENDING = "GET_DATA_PENDING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

// data api fetching
export const getDataPending = () => {
  return {
    type: GET_DATA_PENDING
  };
};

export const getDataSuccess = data => {
  return {
    type: GET_DATA_SUCCESS,
    payload: data
  };
};

export const getDataError = error => {
  return {
    type: GET_DATA_ERROR,
    error: error
  };
};
// favorites navbar
export const addFav = () => {
  return {
    type: ADD_FAV
  };
};
