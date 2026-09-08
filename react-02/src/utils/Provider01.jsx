import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Provider01Context = createContext();

export default function Provider01({ children, store }) {
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

/**
 * Provider01 nhận props từ main.jsx truyền vào, props store = [rootReducer, initialState]
 *
 * sau đó cập nhật state và dispatch thông qua useReducer, và truyền state và dispatch vào contextValue
 *
 * const [state, dispatch] = useReducer(...store);
 *
 * nghĩa là [state, dispatch] = useReducer(rootReducer, initialState);
 *
 * sau đó truyền contextValue = { state, dispatch } vào Provider01Context.Provider
 *
 * contextValue = { state, dispatch } sẽ được truyền vào App.jsx thông qua useContext(Provider01Context),   kết quả của contextValue sẽ là { state: { count: 0 }, dispatch: ƒ }
 *
 *
 * và cuối cùng render children (App.jsx) bên trong Provider01Context.Provider
 */
