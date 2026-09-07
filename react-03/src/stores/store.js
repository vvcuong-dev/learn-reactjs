import { initialState, rootReducer } from "./rootReducer";

export const store = [rootReducer, initialState];

/**
 * rootReducer: là một hàm nhận vào state và action, trả về state mới dựa trên action type.
 */
