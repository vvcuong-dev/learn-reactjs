import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/**
 *  mặc dù file ./index.css không được import trực tiếp trong file App.jsx, nhưng nó vẫn có thể ảnh hưởng đến các component trong App.jsx
 *  vì CSS được áp dụng toàn cục. Khi bạn import file CSS trong main.jsx, các style trong đó sẽ được áp dụng cho toàn bộ ứng dụng React,
 *  bao gồm cả các component được render trong App.jsx.
 */
