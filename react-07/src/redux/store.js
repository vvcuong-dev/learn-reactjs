import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools());
