import "./App.css";
import { useRef, useEffect } from "react";
import Button from "./component/button";

function App() {
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    divRef.current.style.backgroundColor = "lightblue";
    inputRef.current.focus();
    buttonRef.current.style.backgroundColor = "lightgreen";
  }, []);

  return (
    <>
      <h1>Hello, React!</h1>
      <div ref={divRef} className="my-div">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
        delectus!
      </div>
      <input
        type="text"
        ref={inputRef}
        style={{ marginTop: "10px" }}
        placeholder="Type something..."
      />

      <Button label="Click me" ref={buttonRef} />
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
 */

/**
 * Một số tình huống k sử dụng state mà dùng useRef:
 * 1. Lưu trữ giá trị giữa các lần render mà không cần trigger re-render.
 * 2. Truy cập trực tiếp vào DOM elements (ví dụ: focus input, scroll, etc.).
 * 3. Lưu trữ giá trị trước đó (previous value) để so sánh với giá trị hiện tại.
 * 4. Lưu trữ các timers hoặc subscriptions để cleanup khi component unmounts.
 */
