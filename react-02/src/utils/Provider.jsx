import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProviderContext = createContext(null);

export default function Provider({ children }) {
  const initialState = {
    todoList: [{ id: 1, name: "Learn React", completed: false }],
  };
  const [state, setState] = useState(initialState);

  return (
    <ProviderContext.Provider value={{ state, setState }}>
      {children}
    </ProviderContext.Provider>
  );
}
