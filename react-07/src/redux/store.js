import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
import { postReducer } from "./reducers/postReducer";
import { asyncMiddleware } from "./cores/asyncMiddleware";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
  post: postReducer,
});

const middlewares = [asyncMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
