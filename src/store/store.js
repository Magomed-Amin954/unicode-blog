import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import {categoryReduser} from "./redusers/categoryReduser"
import {postReduser} from "./redusers/postReduser"


const rootReducer = combineReducers({
  category: categoryReduser,
  posts: postReduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
