import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;

/**
 * # Action Creator --> Hàm trả về action (object)
 *
 * File action tương ứng với 1 module (feature) trong store:
 *
 * Ví dụ: counter, todo, post, user, comment
 *
 * 1 hàm trong1 file action --> thể hiện 1 action cụ thể: increment, decrement, addTodo, removeTodo, toggleTodo, addPost, removePost, updatePost, togglePost
 */
