import { useContext } from "react";
import { ProviderContext } from "../../utils/Provider";

export default function TodoList() {
  const { state, setState } = useContext(ProviderContext);
  const { todoList } = state;

  const handleRemove = (index) => {
    setState({ ...state, todoList: todoList.filter((_, i) => i !== index) });
    /**
     * nghĩa là: sẽ clone state hiện tại và loại bỏ phần tử có chỉ số index khỏi mảng todoList. Cụ thể, ...state sẽ sao chép tất cả các thuộc tính của state hiện tại, và todoList: todoList.filter((_, i) => i !== index) sẽ tạo một mảng mới chứa tất cả các phần tử hiện tại của todoList ngoại trừ phần tử có chỉ số index.
     */

    /**
     * hàm filter() sẽ tạo ra một mảng mới chứa tất cả các phần tử của mảng ban đầu mà thỏa mãn điều kiện trong hàm callback. Trong trường hợp này, điều kiện là i !== index, nghĩa là chỉ giữ lại các phần tử có chỉ số khác với index.
     */
  };

  const handleComplete = (index) => {
    setState({
      ...state,
      todoList: todoList.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo,
      ),
    });
    /**
     * nghĩa là: sẽ clone state hiện tại và thay đổi trạng thái completed của phần tử có chỉ số index trong mảng todoList. Cụ thể, ...state sẽ sao chép tất cả các thuộc tính của state hiện tại, và todoList: todoList.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo) sẽ tạo một mảng mới chứa tất cả các phần tử hiện tại của todoList, nhưng phần tử có chỉ số index sẽ được thay đổi trạng thái completed.
     */
  };

  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(index)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.name}
            </span>
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleRemove(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
