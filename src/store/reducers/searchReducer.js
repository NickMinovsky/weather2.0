import { SEARCH_ITEM } from "../actions/";

const searchReducer = (state = "", { type, payload }) => {
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
export default searchReducer;
