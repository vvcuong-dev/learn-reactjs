import "../assets/styles.css";
import { useState, useEffect } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState(new Set());

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

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(new Set(users.map((user) => user.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleCheckItem = (id) => (e) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (e.target.checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <label>
        <input
          type="checkbox"
          checked={users.length > 0 && selectedIds.size === users.length}
          onChange={handleCheckAll}
        />{" "}
        Tất cả
      </label>

      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        users.map((user, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedIds.has(user.id)}
              onChange={handleCheckItem(user.id)}
            />{" "}
            {user.name}
          </label>
        ))
      )}
      <button disabled={selectedIds.size === 0}>
        Xóa đã chọn ({selectedIds.size})
      </button>
    </div>
  );
}
