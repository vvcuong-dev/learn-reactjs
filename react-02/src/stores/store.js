import { rootReducer } from "./rootReducer";

const initialState = {
  count: 0,
};

export const store = [rootReducer, initialState];
