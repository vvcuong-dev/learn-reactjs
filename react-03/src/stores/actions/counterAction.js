export const increment = (step) => {
  return {
    type: "COUNTER/INCREMENT",
    payload: step,
  };
};

export const decrement = (step) => {
  return {
    type: "COUNTER/DECREMENT",
    payload: step,
  };
};
