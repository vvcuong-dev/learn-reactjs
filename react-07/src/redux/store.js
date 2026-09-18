import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
import { fetchDataMiddleware } from "./middlewares/fetchDataMiddleware";
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
  post: postReducer,
});

const middlewares = [fetchDataMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
