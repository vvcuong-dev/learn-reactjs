import { combineReducers } from "../utils/core.js";
import { counterReducer, counterState } from "./reducers/counterReducer.js";
import { todoState } from "./reducers/todoReducer.js";
import { todoReducer } from "./reducers/todoReducer.js";

export const [rootReducer, initialState] = combineReducers({
  counter: [counterReducer, counterState],
  todo: [todoReducer, todoState],
});

/**
 * type: feature/action
 *
 * ví dụ: TODO_ADD, TODO_REMOVE, TODO_TOGGLE, POST_ADD, POST_REMOVE, POST_UPDATE, POST_TOGGLE
 */
