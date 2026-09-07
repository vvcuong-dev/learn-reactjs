import { memo } from "react";

function Content({ history, onClick }) {
  console.log("Content rendered");
  return (
    <div>
      <h2>Số lượng giao dịch: {history.length}</h2>
      <button onClick={onClick}>Xóa lịch sử</button>
    </div>
  );
}

export default memo(Content);
