import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

// Redux Thunk

// export const getTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     dispatch(loadTodos(data));
//   };
// };

export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async (_, { rejectWithValue }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos1");
    if (!response.ok) {
      return rejectWithValue("Error");
    }
    const data = await response.json();

    return data;
  },
);
