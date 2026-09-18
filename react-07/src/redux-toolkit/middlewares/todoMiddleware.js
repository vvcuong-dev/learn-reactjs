import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async (_, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      return rejectWithValue("Error");
    }
    const data = await response.json();

    return data;
  },
);
