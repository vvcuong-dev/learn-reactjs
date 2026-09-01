import "./App.css";
import { useState } from "react";
import CounterWithUseEffect from "./components/counter-use-effect";
// import TodoComponent from "./components/todo/todo.component";
// import Login from "./components/login.component";
// import Counter from "./components/counter.component";
// import UserComponent from "./components/user.component";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle Counter</button>
      {show && <CounterWithUseEffect />}
    </>
  );
}

export default App;
