import { rootReducer } from "./rootReducer";

const initialState = {
  count: 0,
  todoList: [],
};

export const store = [rootReducer, initialState];
