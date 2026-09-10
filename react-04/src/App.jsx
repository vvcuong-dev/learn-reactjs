import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Users from "./pages/Users";
import BestSeller from "./pages/BestSeller/BestSeller";
import BestSellerMonth from "./pages/BestSeller/BestSellerMonth";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth">
              <Route path="login" element={<Auth />} />
            </Route>
            <Route path="/products" element={<AuthMiddleware />}>
              <Route index element={<Product />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path="best-seller">
                <Route index element={<BestSeller />} />
                <Route path="month" element={<BestSellerMonth />} />
              </Route>
            </Route>

            <Route path="/users" element={<Users />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/403" element={<Forbidden />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
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
