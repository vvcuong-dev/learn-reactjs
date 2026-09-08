import "../assets/style.css";
import CustomLink from "./CustomLink";

export default function Menu() {
  return (
    <ul className="nav flex-column">
      <CustomLink to="/">Trang chủ</CustomLink>
      <CustomLink to="/about">Giới thiệu</CustomLink>
      <CustomLink to="/products">Sản phẩm</CustomLink>
      <CustomLink to="/contact" target="_blank">
        Liên hệ
      </CustomLink>
    </ul>
  );
}
