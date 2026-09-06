import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Provider01Context = createContext();

export default function Provider01({ children, store }) {
  console.log("store", store);
  console.log("children", children);
  const [state, dispatch] = useReducer(...store);

  const contextValue = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <Provider01Context.Provider value={contextValue}>
      {children}
    </Provider01Context.Provider>
  );
}
