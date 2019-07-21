import { combineReducers } from "redux";
import favReducer from "./favReducer";
import dataReducer from "./dataReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  favoritesCount: favReducer,
  ApiData: dataReducer,
  searchTerm: searchReducer
});

export default rootReducer;
