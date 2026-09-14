import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import BestSeller from "./pages/BestSeller/BestSeller";
import BestSellerMonth from "./pages/BestSeller/BestSellerMonth";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Auth from "./pages/Auth/Auth";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <AuthMiddleware />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: ":id",
          element: <ProductDetail />,
        },
        {
          path: "best-seller",
          children: [
            {
              index: true,
              element: <BestSeller />,
            },
            {
              path: "month",
              element: <BestSellerMonth />,
            },
          ],
        },
      ],
    },
    {
      path: "auth/login",
      element: <Auth />,
    },
  ];

  const elements = useRoutes(routes);
  return elements;
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
