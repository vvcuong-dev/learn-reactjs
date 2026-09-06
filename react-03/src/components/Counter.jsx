import { useDispatch, useSelector } from "../utils/hook";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "COUNTER/INCREMENT", payload: 10 });
  };

  const handleDecrement = () => {
    dispatch({ type: "COUNTER/DECREMENT", payload: 5 });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "lightblue",
          }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "lightcoral",
          }}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
