import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getPost = async (id) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (!response.ok) {
          return navigate("/404");
        }
        const data = await response.json();
        setPost(data);
      } finally {
        setIsLoading(false);
      }
    };
    getPost(id);
  }, [id, navigate]);

  return (
    <div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <>
          <h1 style={{ color: "red" }}>Chi tiết sản phẩm: {post?.title}</h1>
          <p>{post?.body}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </div>
  );
}
