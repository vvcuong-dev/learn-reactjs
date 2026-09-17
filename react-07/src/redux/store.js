import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
});

const middlewares = [loggerMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
