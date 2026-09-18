import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
  post: postReducer,
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
