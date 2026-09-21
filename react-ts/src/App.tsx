import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect((): void => {
    const getTodos = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data = await response.json();
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading todos...</p>
      )}
    </div>
  );
}

/**
 * ReturnType là kiểu dữ liệu được trả về từ một hàm. Nó được sử dụng để lấy kiểu dữ liệu của giá trị trả về của một hàm cụ thể. Trong ví dụ trên, ReturnType<typeof setTimeout> sẽ trả về kiểu dữ liệu của giá trị trả về của hàm setTimeout, đó là một số (number) đại diện cho ID của bộ hẹn giờ.
 */
