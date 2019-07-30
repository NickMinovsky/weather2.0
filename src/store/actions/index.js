export const ADD_FAV = "ADD_FAV";
export const GET_DATA_PENDING = "GET_DATA_PENDING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const SEARCH_ITEM = "SEARCH_ITEM";
export const DELETE_FAV = "DELETE_FAV";
export const INPUT_ERROR = "INPUT_ERROR";
export const FAV_ERROR = "FAV_ERROR";
export const RELOAD = "RELOAD";

// Data api fetching
export const getDataPending = () => ({
  type: GET_DATA_PENDING
});

export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
});

export const getDataError = error => ({
  type: GET_DATA_ERROR,
  error: error
});

// Navbar search
const searchItem = inputTerm => ({
  type: SEARCH_ITEM,
  payload: inputTerm
});

export default searchItem;

// Favorites
export const addFav = favData => ({
  type: ADD_FAV,
  payload: favData
});

export const deleteFav = cityId => ({
  type: DELETE_FAV,
  payload: cityId
});

// Error Handleing
export const inputError = message => ({
  type: INPUT_ERROR,
  payload: message
});

export const favError = message => ({
  type: FAV_ERROR,
  payload: message
});
