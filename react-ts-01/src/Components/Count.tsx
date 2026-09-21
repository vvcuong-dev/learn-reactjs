import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
  payload?: unknown;
};

export default function Count() {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (): void => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = (): void => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "lightblue",
            border: "1px solid blue",
            cursor: "pointer",
          }}
          onClick={() => handleIncrement()}
        >
          Increment
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "lightcoral",
            border: "1px solid red",
            cursor: "pointer",
          }}
          onClick={() => handleDecrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
