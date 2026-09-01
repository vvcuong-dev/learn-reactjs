import { useState, useEffect } from "react";

function PostComponent({ reloadKey }) {
  //State lưu kết quả sau khi API trả về

  const [posts, setPosts] = useState([]);
  const [isloading, setLoading] = useState(true);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPosts();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPosts();
    return () => {
      console.log("Cleanup function called");
      setLoading(true);
    };
  }, [reloadKey]);

  return (
    <>
      <h1>Call API useState + useEffect</h1>
      {isloading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id} - {post.title}
            </h2>
          </div>
        ))
      )}
    </>
  );
}

export default PostComponent;
