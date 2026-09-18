import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { postsMiddleware } from "../redux/middlewares/postsMiddleware";
import { demoMiddleware } from "../redux/middlewares/demoMiddleware";

export default function Post() {
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsMiddleware());
    dispatch(demoMiddleware());
  }, [dispatch]);

  if (status === "error") {
    return (
      <h2 className="text-center text-red-500">
        Error fetching posts. Please try again later.
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mb-40">
      <h1 className="text-3xl font-bold text-center">Post</h1>

      {status === "pending" ? (
        <p className="text-center text-blue-500">Loading posts...</p>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post.id} className="border p-4 my-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
