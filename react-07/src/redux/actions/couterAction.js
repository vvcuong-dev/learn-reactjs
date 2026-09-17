// Tạo các function tương ứng với các action type

export const increment = () => {
  return {
    type: "counter/increment",
  };
};

export const decrement = () => {
  return {
    type: "counter/decrement",
  };
};
