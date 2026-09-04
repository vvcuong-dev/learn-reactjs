import { useContext } from "react";
import { ProviderContext } from "../../utils/Provider";

export default function TodoList() {
  const { state } = useContext(ProviderContext);
  const { todoList } = state;

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
