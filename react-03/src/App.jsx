import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Content from "./components/Content";

function App() {
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState([]);

  const handleChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Vui lòng nhập số tiền bạn muốn gửi");
      return;
    }

    setHistory([...history, amount]);
    setAmount("");
  };

  const amountTotal = useMemo(() => {
    return history.reduce((total, item) => {
      console.log("reduce rendered");
      return total + item;
    }, 0);

    // Callback trong useMemo phải có return, nếu không sẽ bị lỗi
  }, [history]);

  const handleDeleteHistory = useCallback(() => {
    setHistory([]);
  }, []);

  // Khởi tạo hàm khi component render lại, nếu không dùng useCallback thì hàm sẽ được khởi tạo lại khi component render lại, dẫn đến component con cũng render lại

  console.log("App rendered");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Số tiền bạn muốn gửi"
          onChange={handleChangeAmount}
          value={amount}
        />
        <button>Thêm</button>
      </form>

      <h2>Lịch sử giao dịch: {amountTotal.toLocaleString("vi-VN")} VNĐ</h2>
      {history.map((item, index) => (
        <p key={index}>
          #{index + 1}: {+item.toLocaleString("vi-VN")} VNĐ
        </p>
      ))}

      <Content history={history} onClick={handleDeleteHistory} />
    </>
  );
}

export default App;

// React.memo ==> HOC (Higher Order Component) giúp tránh render lại component khi props không thay đổi
// useMemo ==> cache giá trị trong 1 component giữa các lần render, giúp tránh tính toán lại giá trị khi props không thay đổi
// useCallback ==> cache hàm trong 1 component giữa các lần render, giúp tránh khởi tạo lại hàm khi props không thay đổi
