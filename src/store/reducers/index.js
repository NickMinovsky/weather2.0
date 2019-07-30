import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import dataReducer from "./dataReducer";
import searchReducer from "./searchReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  apiData: dataReducer,
  favoritesList: favoritesReducer,
  searchTerm: searchReducer,
  errors: errorReducer
});

export default rootReducer;
