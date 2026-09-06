import { useReducer } from "react";
import "./App.css";

function App() {
  const counterReducer = (state, action) => {
    console.log("Reducer called with state:", state, "and action:", action);
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload || 1 }; // Increment by payload or default to 1
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 10 }); // You can change the payload to increment by a different value
  };

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
