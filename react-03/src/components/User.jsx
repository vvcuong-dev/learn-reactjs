import user from "../../src/data/db.json";
import { useState, useDeferredValue } from "react";

export default function User() {
  const [keyword, setKeyword] = useState(""); // giá trị gốc - cập nhật ngay khi gõ, input luôn mượt
  const deferredKeyword = useDeferredValue(keyword); //

  console.log("deferredKeyword: ", deferredKeyword);

  const isPending = keyword !== deferredKeyword; // so sánh 2 giá trị để biết đang "trễ" hay không
  /**
   * nếu keyword và deferredKeyword khác nhau => đang "trễ" => isPending = true
   * nếu keyword và deferredKeyword giống nhau => không "trễ" => isPending = false
   */

  const handleSearch = (e) => {
    setKeyword(e.target.value); // chỉ cần 1 state, cập nhật ngay - không cần inputValue riêng nữa
  };

  return (
    <div>
      <input
        type="text"
        name="keyword"
        placeholder="Search..."
        value={keyword}
        onChange={handleSearch}
      />

      {isPending && <p style={{ color: "gray" }}>Đang lọc...</p>}

      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        {user.map(({ id, fullName }) => {
          const pos = fullName
            .toLowerCase()
            .indexOf(deferredKeyword.toLowerCase()); // dùng deferredKeyword để lọc

          if (deferredKeyword) {
            if (pos === -1) return null;

            return (
              <h3 key={id}>
                {fullName.slice(0, pos)}
                <span style={{ backgroundColor: "yellow" }}>
                  {fullName.slice(pos, pos + deferredKeyword.length)}
                </span>
                {fullName.slice(pos + deferredKeyword.length)}
              </h3>
            );
          }

          return <h3 key={id}>{fullName}</h3>;
        })}
      </div>
    </div>
  );
}
