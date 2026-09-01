import { useState, useEffect } from "react";

function CounterWithUseEffect() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Effect:", count);
    return () => {
      console.log("Cleanup:", count); // nghĩa là trước khi component unmount hoặc trước khi callback được gọi lại thì cleanup sẽ được gọi
    };
  }, [count]);

  useEffect(() => {
    console.log("Mounting: CounterWithUseEffect");
    return () => {
      console.log("Unmounting: CounterWithUseEffect");
    };
  }, []);

  return (
    <div>
      <h1>Counter - UseEffect</h1>
      {console.log("Render", count)}
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterWithUseEffect;

/**
 * #Hook useEffect
 *  - Để xử lý các logic bên ngoài component (side effects) như: gọi API, thao tác DOM, setTimeout, setInterval, ...React cung cấp một hook đặc biệt để xử lý các logic này là useEffect.
 *
 * useEffect(callback, dependencies)
 *  - callback: là 1 hàm dùng để thực thi các logic side effects.
 *  - dependencies: điều kiện để callback được thực thi, nếu dependencies thay đổi thì callback sẽ được gọi lại.
 *     - null | undefined: callback sẽ được gọi lại mỗi khi component re-render. ví dụ: setState, props thay đổi.
 *     - []: sau khi component được mount thì callback sẽ được gọi 1 lần duy nhất. ví dụ: gọi API, thao tác DOM, setTimeout, setInterval, ...
 *     - [var1, var 2, varn]: Khi 1 trong các giá trị thay đổi thì callback sẽ được gọi lại. ví dụ: props thay đổi, state thay đổi.
 *
 *  - useEffect(callback, dependencies) sẽ được gọi sau khi component render xong.
 *
 *  - useEffect(callback, dependencies) có thể return về một hàm cleanup để dọn dẹp các logic side effects trước khi component unmount hoặc trước khi callback được gọi lại.
 *
 *  - useEffect(callback, dependencies) có thể có nhiều hơn 1 useEffect trong cùng 1 component.
 */

/**
 * Thứ tự hoạt động trong useEffect:
 * 1. State thay đổi
 * 2. Component re-render
 * 3. update UI
 * 4. cleanup (nếu có) - là kết quả của callback trước đó, nếu có return về 1 hàm cleanup thì cleanup sẽ được gọi trước khi callback được gọi lại hoặc trước khi component unmount.
 * 5. callback
 *
 *  - Khi state thay đổi thì component sẽ re-render, sau khi re-render xong thì callback sẽ được gọi.
 *  - Nếu callback có return về một hàm cleanup thì cleanup sẽ được gọi trước khi callback được gọi lại hoặc trước khi component unmount.
 *
 *  - Khi component unmount thì cleanup sẽ được gọi.
 */
