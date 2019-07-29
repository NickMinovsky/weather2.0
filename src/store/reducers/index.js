import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import dataReducer from "./dataReducer";
import searchReducer from "./searchReducer";
import errorReducer from "./errorReducer";
import reloadReducer from "./reloadReducer";

const rootReducer = combineReducers({
  apiData: dataReducer,
  favoritesList: favoritesReducer,
  searchTerm: searchReducer,
  errors: errorReducer,
  redirect: reloadReducer
});

export default rootReducer;
