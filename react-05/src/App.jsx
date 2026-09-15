import "./assets/style.css";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="text-5xl font-bold text-blue-600">Hello Tailwind</h1>

      <Helmet>
        <title>Trang chủ - My Shop</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Cửa hàng bán đồ handmade" />
        <meta property="og:title" content="My Shop - Đồ handmade" />
        <meta property="og:image" content="/assets/images/preview.jpg" />

        {/**
         *  name="description" content="Cửa hàng bán đồ handmade" => giúp tìm kiếm trên Google
         * property="og:title" content="My Shop - Đồ handmade" => giúp hiển thị tiêu đề khi chia sẻ trên mạng xã hội
         * property="og:image" content="/assets/images/preview.jpg" => giúp hiển thị hình ảnh khi chia sẻ trên mạng xã hội
         *
         */}
      </Helmet>

      <div>
        <img
          src="/assets/images/295497942_2922294937.jpg"
          alt="Logo"
          style={{ width: "100px", height: "300" }}
        />
      </div>
    </div>
  );
}

/**
 * # Static Assets
 */
