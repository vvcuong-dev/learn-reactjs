import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);

/**
 *  mặc dù file ./index.css không được import trực tiếp trong file App.jsx, nhưng nó vẫn có thể ảnh hưởng đến các component trong App.jsx
 *  vì CSS được áp dụng toàn cục. Khi bạn import file CSS trong main.jsx, các style trong đó sẽ được áp dụng cho toàn bộ ứng dụng React,
 *  bao gồm cả các component được render trong App.jsx.
 *
 * - createRoot(document.getElementById("root")): Tạo một root React trong phần tử DOM có id là "root". Đây là nơi mà ứng dụng React sẽ được render.
 * - .render(<StrictMode><App /></StrictMode>): Render component App bên trong StrictMode. StrictMode là một công cụ giúp phát hiện các vấn đề tiềm ẩn trong ứng dụng React.
 *
 *  Tóm lại, việc import file CSS trong main.jsx sẽ ảnh hưởng đến toàn bộ ứng dụng React, bao gồm cả các component được render trong App.jsx.
 */
