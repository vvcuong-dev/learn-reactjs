import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "counter/increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "counter/decrement" });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        Count: {count}
      </h1>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-20"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-20"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
