import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getTodos } from "../middlewares/todoMiddleware.js";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: ["Learn Redux Toolkit"],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {
    todoAdd: (state, action) => {
      state.todoList.push(action.payload);
    },
    todoRemove: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    // pending
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });

    // fulfilled
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.status = "idle";
      state.todoList = action.payload;
    });

    // rejected
    builder.addCase(getTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { todoAdd, todoRemove } = todoSlice.actions;

// Selectors

export const selectTodoList = (state) => state.todo.todoList;
export const selectTodoStatus = (state) => state.todo.status;

export const selectTodoListCompleted = createSelector(
  [selectTodoList],
  (todoList) => todoList.filter((todo) => todo.completed),
);
