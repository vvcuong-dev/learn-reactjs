import "./App.css";
import Todo from "./component/todo/Todo";
import Provider from "./utils/Provider";

function App() {
  return (
    <Provider>
      <Todo />
    </Provider>
  );
}

export default App;
