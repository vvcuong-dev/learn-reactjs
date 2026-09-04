import { forwardRef } from "react";
function Button({ label }, ref) {
  return (
    <div>
      <button ref={ref}>{label}</button>
    </div>
  );
}

export default forwardRef(Button);

/**
 * - forwardRef --> chuyển ref từ component này qua component khác,
 * để component con có thể nhận ref từ component cha.
 * - forwardRef là một higher-order component (HOC) trong React, cho phép bạn truyền ref từ component cha xuống component con.
 * - Khi bạn sử dụng forwardRef, bạn có thể nhận ref trong component con và gán nó cho một phần tử DOM cụ thể.
 * - Điều này hữu ích khi bạn muốn truy cập trực tiếp vào phần tử DOM của component con từ component cha.
 */
