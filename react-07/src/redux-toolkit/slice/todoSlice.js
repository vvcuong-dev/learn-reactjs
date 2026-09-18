import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: ["Learn Redux Toolkit"],
  },
  reducers: {
    todoAdd: (state, action) => {
      state.todoList.push(action.payload);
    },
    todoRemove: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
  },
});

export const { todoAdd, todoRemove } = todoSlice.actions;
