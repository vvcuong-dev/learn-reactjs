export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      const state = store.getState();
      console.log("prev state: ", state);
      console.log("action: ", action);

      next(action);
    };
  };
};
