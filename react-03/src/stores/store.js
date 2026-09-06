import { rootReducer } from "./rootReducer";

const initialState = {
  count: 0,
  todoList: ["Learn React", "Learn Redux"],
};

export const store = [rootReducer, initialState];
