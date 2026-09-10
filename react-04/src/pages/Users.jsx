import { useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const status = searchParams.get("status");

  console.log("searchParams", Array.from(searchParams.entries()));
  const paramEntries = Array.from(searchParams.entries());

  const query = {};
  paramEntries.forEach(([key, value]) => {
    if (query[key]) {
      query[key] = [...query[key], value];
    } else {
      query[key] = value;
    }
  });
  console.log("query", query);

  const handleClick = () => {
    setSearchParams({
      ...query,
      q: "react",
      status: "inactive",
    });
  };

  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <p>status: {status}</p>
      <p>q: {q}</p>
      <button onClick={handleClick}>Change Search Params</button>
    </div>
  );
}

/**
 * searchParams.set("status", "inactive"); chỉ thay đổi giá trị trong object searchParams, nhưng không thay đổi URL trình duyệt.
 * Nếu muốn thay đổi URL trình duyệt, sử dụng history API
 */
