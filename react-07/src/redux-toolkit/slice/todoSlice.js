import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: ["Learn Redux Toolkit"],
  },
  reducers: {
    loadTodos: (state, action) => {
      state.todoList = action.payload;
    },
    todoAdd: (state, action) => {
      state.todoList.push(action.payload);
    },
    todoRemove: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
  },
});

export const { todoAdd, todoRemove, loadTodos } = todoSlice.actions;

// Redux Thunk

export const getTodos = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch(loadTodos(data));
  };
};
