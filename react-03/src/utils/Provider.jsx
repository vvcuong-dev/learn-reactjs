import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProviderContext = createContext();

export default function Provider({ children, store }) {
  const [state, dispatch] = useReducer(...store);

  const contextValue = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <ProviderContext.Provider value={contextValue}>
      {children}
    </ProviderContext.Provider>
  );
}
