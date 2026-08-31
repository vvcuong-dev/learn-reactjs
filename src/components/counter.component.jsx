import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    // if (count > 0) {
    //   setCount(count - 1);
    // }
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

/**
 * # useState
 *  - const [tenState, HamsetTenState] = useState(giá trị khởi tạo)
 *
 * Đặc điểm:
 *   - mỗi lần setState thì component sẽ re-render lại nghĩa là cả component sẽ chạy lại từ đầu
 *
 */
