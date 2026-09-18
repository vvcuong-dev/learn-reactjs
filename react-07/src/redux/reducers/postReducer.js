const initialState = {
  posts: [],
  status: "idle", // 'idle' | 'loading' | 'error'
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/loadData":
      return { ...state, posts: action.payload };
    case "posts/updateStatus":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
