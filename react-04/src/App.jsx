import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./pages/NotFound";

import { PublicRouter } from "./routes/publicRouter";
import { PrivateRouter } from "./routes/PrivateRouter";

function App() {
  return (
    <Routes>
      {PrivateRouter()}
      {PublicRouter()}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

/**
 * User click Link "Giới thiệu" (to="/about")
   → react-router đổi URL trình duyệt thành /about (không reload trang)
   → BrowserRouter phát hiện URL thay đổi → re-render lại context (context mới là /about)
   → Routes so khớp lại → render <About />
   → Đồng thời, mỗi CustomLink tự re-run useMatch()
      → CustomLink "Giới thiệu" giờ match = true → thêm class "active"
      → Các CustomLink khác match = null → không có "active

    Note: 
    - Context là gì trong trường hợp này? BrowserRouter bên trong nó dùng React Context (Context API) để lưu trữ thông tin về URL hiện tại (location) và chia sẻ nó cho toàn bộ cây 
      component con — mà không cần truyền props qua từng tầng.

 */
