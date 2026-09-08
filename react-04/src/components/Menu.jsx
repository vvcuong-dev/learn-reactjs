import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Trang chủ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          Giới thiệu
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">
          Sản phẩm
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Liên hệ
        </Link>
      </li>
    </ul>
  );
}
