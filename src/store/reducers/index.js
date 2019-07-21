import { combineReducers } from "redux";
import favReducer from "./favReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  favoritesCount: favReducer,
  ApiData: dataReducer
});

export default rootReducer;
