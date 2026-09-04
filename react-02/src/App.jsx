import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("App component rendered");

  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;
    console.log("countRef.current sau khi tăng:", countRef.current);
  };

  return (
    <>
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;

/**
 * - useRef(0) chỉ tạo object { current: 0 } một lần duy nhất ở lần render đầu tiên, và
 * giá trị của current sẽ được giữ nguyên giữa các lần render tiếp theo.
 * - ở các lần render sau, React trả về cùng một object đó (không tạo mới), nên
 *   countRef.current sẽ giữ nguyên giá trị của nó giữa các lần render, không bị reset về 0.
 *
 * => đây chính là lý do người ta dùng useRef thay cho biến thường - để lưu giá trị "sống sót"
 *    qua các lần render mà không cần useState.
 *
 * Lưu ý: useRef không làm trigger re-render khi giá trị current thay đổi, nên nếu muốn hiển thị giá trị
 *        mới của countRef.current trên UI, bạn cần dùng useState hoặc forceUpdate.
 *
 */
