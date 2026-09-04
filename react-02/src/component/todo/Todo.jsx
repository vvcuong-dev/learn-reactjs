import "../../assets/styles.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
