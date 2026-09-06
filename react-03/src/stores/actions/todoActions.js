export const addTodo = (todo) => {
  return {
    type: "TODO/ADD",
    payload: todo,
  };
};
