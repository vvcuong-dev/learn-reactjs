import "../assets/styles.css";
import { useRef, useState, useEffect } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletedCount, setDeletedCount] = useState(0);
  const checkBoxListRef = useRef([]);

  const handleCheckAll = (e) => {
    const status = e.target.checked;

    if (status) {
      setDeletedCount(checkBoxListRef.current.length);
    } else {
      setDeletedCount(0);
    }

    console.log("CheckBoxListRef:", checkBoxListRef.current);

    checkBoxListRef.current.forEach((checkbox) => {
      if (checkbox) {
        checkbox.checked = status;
      }
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     console.log("CheckBoxListRef:", checkBoxListRef.current);
  //   }, [users, isLoading]);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <label>
        <input type="checkbox" onChange={handleCheckAll} /> Tất cả
      </label>

      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        users.map((user, index) => (
          <label key={index}>
            <input
              type="checkbox"
              ref={(ref) => {
                checkBoxListRef.current[index] = ref;
              }}
              // nghĩa là checkBoxListRef.current[index] sẽ lưu trữ tham chiếu đến phần tử checkbox tương
              // ứng với người dùng tại vị trí index trong mảng users.
            />{" "}
            {user.name}
          </label>
        ))
      )}
      <button disabled={deletedCount === 0}>
        Xóa đã chọn ({deletedCount})
      </button>
    </div>
  );
}
