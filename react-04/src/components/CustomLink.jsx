import { Link, useResolvedPath, useMatch } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname });

  return (
    <li className={`nav-item ${match ? "active" : ""}`}>
      <Link to={to} className={"nav-link"} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;

/**
 * useResolvedPath(to) nhận vào một đường dẫn (string hoặc object), trả về object
 * { pathname, search, hash } - đường dẫn TUYỆT ĐỐI đã được "giải quyết" dựa trên
 * route hiện tại (hỗ trợ resolve đường dẫn tương đối như "../about").
 * Lưu ý: KHÔNG có "state" trong object trả về - state thuộc về location/navigate,
 * không thuộc về path.
 *
 * useMatch(pattern) nhận vào 1 pattern (thường là string, VD: "/user/:id"; có thể
 * truyền object { path, caseSensitive, end } nếu cần tùy chỉnh nâng cao). Hook sẽ
 * so khớp pattern này với URL HIỆN TẠI của trình duyệt. Nếu khớp, trả về object
 * chứa params, pathname, pathnameBase, pattern. Nếu không khớp, trả về null.
 */
