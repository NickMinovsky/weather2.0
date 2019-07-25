import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import dataReducer from "./dataReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  favoritesList: favoritesReducer,
  fromAPI: dataReducer,
  searchTerm: searchReducer
});

export default rootReducer;
