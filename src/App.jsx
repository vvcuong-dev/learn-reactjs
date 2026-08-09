import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Chào mừng bạn đến với ReactJS và Vite! Hãy bắt đầu xây dựng ứng dụng
            của bạn ngay bây giờ.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;

/**
 * - file: App.jsx sẽ liên kết với file index.html thông qua file main.jsx.
 *   File main.jsx sẽ là nơi khởi tạo ứng dụng React và render component App vào phần tử có id "root" trong index.html.
 */
