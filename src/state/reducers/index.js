import { combineReducers } from "redux";
import namesReducer from "./setListName";
import booksReducer from "./setBooksReducer";

//root reducer

const reducers = combineReducers({
  books: booksReducer,
  names: namesReducer,
});

export default reducers;
