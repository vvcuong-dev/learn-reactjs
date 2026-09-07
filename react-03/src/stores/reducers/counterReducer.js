export const counterState = {
  count: 0,
};

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "COUNTER/DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
