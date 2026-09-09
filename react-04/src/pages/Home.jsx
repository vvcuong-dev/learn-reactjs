import { createSearchParams, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const params = {
    pathname: "/thank-you",
    search: createSearchParams({
      id: 123,
      name: "Nguyen Van A",
    }).toString(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(params);
  };

  return (
    <div>
      <h1>Trang chủ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ tên</label>
          <input type="text" placeholder="Họ tên" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

/**
 * useNavigate với replace: true sẽ thay thế URL hiện tại bằng URL mới, không thêm vào lịch sử trình duyệt. Khi người dùng nhấn nút "Quay lại", họ sẽ không thể quay lại trang trước đó.
 *
 * Ví dụ: trang A đi tới trang B, tại trang B chúng ta click back lên trình duyệt thì sẽ không quay lại trang A nữa.
 */

// Component Navigate
