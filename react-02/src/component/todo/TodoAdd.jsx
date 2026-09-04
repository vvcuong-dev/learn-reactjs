import { useState, useContext } from "react";
import { ProviderContext } from "../../utils/Provider";

export default function TodoAdd() {
  const [name, setName] = useState("");
  const { state, setState } = useContext(ProviderContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a todo name");
      return;
    }

    setState({
      ...state,
      todoList: [...state.todoList, { id: Date.now(), name, completed: false }],
    });
    /**
     * nghĩa là: sẽ clone state hiện tại và thêm một todo mới vào mảng todoList. Cụ thể, ...state sẽ sao chép tất cả các thuộc tính của state hiện tại, và todoList: [...state.todoList, { id: Date.now(), name, completed: false }] sẽ tạo một mảng mới chứa tất cả các phần tử hiện tại của todoList cộng với todo mới.
     */
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // nghĩa là khi người dùng nhập vào input, giá trị của input sẽ được cập nhật vào state name thông qua hàm setName.
        // e.target.value là giá trị hiện tại của input, và setName(e.target.value) sẽ cập nhật state name với giá trị đó.
      />
      <button type="submit">Add</button>
    </form>
  );
}
