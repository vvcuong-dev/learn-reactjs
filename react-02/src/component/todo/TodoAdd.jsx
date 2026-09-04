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

    console.log("Adding todo:", state);
    setState({ ...state, todoList: [...state.todoList, name] });
    // setState là một hàm được cung cấp bởi useState để cập nhật state. Ở đây, nó được sử dụng để thêm một todo mới vào danh sách todoList.
    // ...state là cú pháp spread operator trong JavaScript, nó sao chép tất cả các thuộc tính hiện tại của state vào một đối tượng mới. Sau đó, chúng ta cập nhật thuộc tính todoList bằng cách tạo một mảng mới chứa tất cả các todo hiện tại và thêm todo mới (name) vào cuối mảng.
    // Tại sao phải chuyền vào 1 đối tượng mới? Vì React sử dụng cơ chế so sánh nông (shallow comparison) để xác định xem state có thay đổi hay không. Nếu chúng ta chỉ thay đổi mảng todoList mà không tạo một đối tượng mới, React sẽ không nhận ra sự thay đổi và không render lại component. Bằng cách tạo một đối tượng mới, chúng ta đảm bảo rằng React sẽ nhận ra sự thay đổi và render lại component.

    // ví dụ: nếu không tạo đối tượng mới, mà chỉ làm như sau:
    // state.todoList.push(name);
    // setState(state);
    // thì React sẽ không nhận ra sự thay đổi và không render lại component.

    // có thể bạn sẽ thấy khó hiểu khi setName ở dưới chỉ cập nhật 1 giá trị thay vì cập nhật 1 đối tượng như setState. Điều này là do setName chỉ cập nhật một state duy nhất (name), trong khi setState cập nhật một state phức tạp hơn (một đối tượng chứa nhiều thuộc tính). Khi bạn chỉ có một state duy nhất, bạn có thể trực tiếp cập nhật giá trị của nó mà không cần tạo một đối tượng mới.\

    // setState sẽ tùy thuộc vào cách bạn thiết kế state của mình. Nếu state của bạn là một đối tượng phức tạp, bạn nên tạo một đối tượng mới khi cập nhật state để đảm bảo React nhận ra sự thay đổi. Nếu state của bạn chỉ là một giá trị đơn giản, bạn có thể trực tiếp cập nhật giá trị đó mà không cần tạo một đối tượng mới.
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
