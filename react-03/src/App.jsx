import "./App.css";
import Input from "./components/Input";
import { useRef, useState, useEffect } from "react";

function App() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSetValue = () => {
    inputRef.current.setValue("Hello World");
  };

  const handleGetValue = () => {
    const value = inputRef.current.getValue();
    setValue(value);
  };

  useEffect(() => {
    console.dir(inputRef.current);
  }, []);

  return (
    <>
      <Input ref={inputRef} />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleSetValue}>Set value</button>
        <button onClick={handleGetValue}>Get value</button>
      </div>
      <div>
        Kết quả: <span>{value}</span>
      </div>
    </>
  );
}

export default App;

/**
 * Bởi vì là ở Input component có sử dụng ref={inputRef} nên Input component phải được bọc bởi forwardRef để có thể nhận ref từ component cha (App) và const inputRef = useRef(null) sẽ được truyền vào Input component thông qua tham số ref trong hàm Input.
 *
 * nghĩa là khi App component render, nó sẽ tạo ra một ref object (inputRef) và truyền nó vào Input component thông qua prop ref. Trong Input component, ref được nhận như một tham số và được gán cho thẻ input thông qua ref={ref}. Khi người dùng nhấn nút "Focus", hàm handleFocus sẽ được gọi, và inputRef.current sẽ trỏ đến thẻ input trong Input component, cho phép chúng ta gọi phương thức focus() trên nó.
 *
 * lý do tại sao inputRef.current.focus() lại có thể focus vào thẻ input trong Input component là vì khi App component render, nó sẽ tạo ra một ref object (inputRef) và truyền nó vào Input component thông qua prop ref. Trong Input component, ref được nhận như một tham số và được gán cho thẻ input thông qua ref={ref}. Khi người dùng nhấn nút "Focus", hàm handleFocus sẽ được gọi, và inputRef.current sẽ trỏ đến thẻ input trong Input component, cho phép chúng ta gọi phương thức focus() trên nó.
 */
