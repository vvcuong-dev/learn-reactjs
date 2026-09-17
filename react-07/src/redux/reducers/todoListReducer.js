const initialState = {
  todoList: ["Learn React", "Learn Redux", "Build a Todo App"],
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todoList/remove": {
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
      };
    }

    default:
      return state;
  }
};
