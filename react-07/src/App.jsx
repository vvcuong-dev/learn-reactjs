// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
// import Post from "./components/Post";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux-toolkit/slice/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <h1 className="text-2xl font-bold text-center text-blue-300">
          Count: {count}
        </h1>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-20"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
