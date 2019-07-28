export const ADD_FAV = "ADD_FAV";
export const GET_DATA_PENDING = "GET_DATA_PENDING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const SEARCH_ITEM = "SEARCH_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

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
  type: DELETE_ITEM,
  payload: cityId
});
