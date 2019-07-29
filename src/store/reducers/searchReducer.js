import { SEARCH_ITEM } from "../actions/";

const initialState = {
  searchItem: "Tel-Aviv"
};
const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_ITEM:
      return {
        searchItem: payload
      };
    default:
      return state;
  }
};

export const getSearchItem = state => state.searchItem;
export const getRedirectState = state => state.redirect;

export default searchReducer;
