import user from "../../src/data/db.json";
import { useState, useTransition } from "react";

export default function User() {
  const [inputValue, setInputValue] = useState(""); // giá trị hiển thị trên input - luôn urgent
  const [keyword, setKeyword] = useState(""); // giá trị dùng để lọc - có thể trễ
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;

    setInputValue(value); // cập nhật NGAY, để gõ không bị lag

    startTransition(() => {
      setKeyword(value); // cập nhật "trễ hơn", việc lọc/render nặng sẽ chạy trong transition này
    });
  };

  return (
    <div>
      <input
        type="text"
        name="keyword"
        placeholder="Search..."
        value={inputValue}
        onChange={handleSearch}
      />

      {isPending && <p style={{ color: "gray" }}>Đang lọc...</p>}

      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        {user.map(({ id, fullName }) => {
          const pos = fullName.toLowerCase().indexOf(keyword.toLowerCase());

          if (keyword) {
            if (pos === -1) return null;

            return (
              <h3 key={id}>
                {fullName.slice(0, pos)}
                <span style={{ backgroundColor: "yellow" }}>
                  {fullName.slice(pos, pos + keyword.length)}
                </span>
                {fullName.slice(pos + keyword.length)}
              </h3>
            );
          }

          return <h3 key={id}>{fullName}</h3>;
        })}
      </div>
    </div>
  );
}
