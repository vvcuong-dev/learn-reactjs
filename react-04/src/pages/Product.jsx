import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Product() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const keyword = searchParams.get("query") || "";

  const handleChangeInputSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { query: value } : {});
  };

  // Chỉ gọi API 1 lần khi mount
  useEffect(() => {
    const controller = new AbortController(); // cái này để hủy request khi component unmount

    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal },
        );

        if (!response.ok) {
          navigate("/404");
          return;
        }

        const data = await response.json();
        setAllPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();

    return () => controller.abort();
  }, [navigate]);

  // Lọc theo keyword ở client
  const posts = keyword
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase()),
      )
    : allPosts;

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div className="mb-3">
        <input
          type="search"
          placeholder="Tìm kiếm sản phẩm..."
          className="form-control"
          value={keyword}
          onChange={handleChangeInputSearch}
        />
      </div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>
                <Link to={`/products/${post.id}`}>{post.title}</Link>
              </h3>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
