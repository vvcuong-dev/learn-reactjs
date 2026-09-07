export const todoState = {
  todoList: ["Learn React", "Learn Redux", "Build a Todo App"],
};

export const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case "TODO/ADD":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
