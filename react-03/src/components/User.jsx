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

/**
 * Demo minh họa cách dùng useDeferredValue để giảm tải render khi lọc danh sách lớn.
 *
 * keyword: giá trị gốc, cập nhật ngay lập tức mỗi khi gõ vào input -> input luôn mượt.
 *
 * deferredKeyword: bản "trễ" của keyword, do React tự quản lý priority thấp hơn.
 *
 * React sẽ ưu tiên cập nhật UI/input theo keyword trước, sau đó mới render lại phần
 *
 * danh sách theo deferredKeyword khi có "thời gian rảnh" - không phải delay theo thời gian cố định,
 * và có thể bị ngắt giữa chừng nếu người dùng gõ tiếp.
 *
 * isPending (tự tính bằng keyword !== deferredKeyword) dùng để biết deferredKeyword
 * có đang theo sau keyword hay chưa, từ đó hiển thị "Đang lọc..." và làm mờ danh sách.
 *
 * Lưu ý: useDeferredValue không "đóng băng" render, mà cho phép 2 phiên bản UI tồn tại
 * tạm thời (input mới nhất + danh sách theo giá trị cũ) cho đến khi bản mới sẵn sàng -
 * nhờ đó gián tiếp giảm tải cho phần render nặng (lọc danh sách) mà không làm input bị lag.
 *
 * Trong ví dụ này, keyword là state local do chính component tự quản lý, nên thực ra
 * cũng có thể dùng useTransition. useDeferredValue phát huy giá trị rõ nhất khi giá trị
 * đến từ nơi bạn không kiểm soát được việc gọi setState (props, custom hook, thư viện ngoài).
 */
