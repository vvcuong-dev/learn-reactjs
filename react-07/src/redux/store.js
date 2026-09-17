import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
