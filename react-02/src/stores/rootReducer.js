export const rootReducer = (state, action) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return { ...state, count: state.count + (action.payload || 1) };
    case "COUNTER/DECREMENT":
      return { ...state, count: state.count - (action.payload || 1) };
    default:
      return state;
  }
};

/**
 * type: feature/action
 *
 * ví dụ: TODO_ADD, TODO_REMOVE, TODO_TOGGLE, POST_ADD, POST_REMOVE, POST_UPDATE, POST_TOGGLE
 */
