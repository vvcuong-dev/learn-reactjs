export const demoMiddleware = () => {
  return (dispatch, getState) => {
    console.log("Hello from demoMiddleware");

    console.log("Current state:", getState());
    console.log("dispatch", dispatch);
  };
};
