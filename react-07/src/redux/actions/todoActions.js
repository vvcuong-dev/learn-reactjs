export const todoAdd = (value) => {
  return {
    type: "todoList/add",
    payload: value,
  };
};

export const todoRemove = (index) => {
  return {
    type: "todoList/remove",
    payload: index,
  };
};
