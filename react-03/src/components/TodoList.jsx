import { useSelector } from "../utils/hook";

export default function TodoList() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
