import { useSelector, useDispatch } from "../utils/hook";
import { useState } from "react";
import { addTodo } from "../stores/actions/todoActions";

export default function TodoList() {
  const [name, setName] = useState("");
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return alert("Please enter a todo name");
    }

    dispatch(addTodo(name));
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          onChange={handleChange}
          value={name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
