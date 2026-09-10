// import { navigateToForbidden } from "../utils/forbidden";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!response.ok) {
        return navigate("/404");
      }
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    };
    getPosts();
  }, [navigate]);

  // const status = false;

  // if (!status) {
  //   return navigateToForbidden();
  // }

  return (
    <div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <>
          <h1>Danh sách sản phẩm</h1>
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
        </>
      )}
    </div>
  );
}
