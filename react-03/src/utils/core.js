export const combineReducers = (reducers) => {
  const mergeInitialState = () => {
    const initialState = {};
    for (const key in reducers) {
      initialState[key] = reducers[key][1];
    }
    return initialState;
  };

  const reducer = (state, action) => {
    const newState = {};
    for (const key in reducers) {
      newState[key] = reducers[key][0](state[key], action);
    }
    return newState;
  };
  const initialState = mergeInitialState();
  return [reducer, initialState];
};
