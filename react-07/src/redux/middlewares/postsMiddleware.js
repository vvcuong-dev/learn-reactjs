import { loadPosts } from "../actions/postActions";
import { updateStatus } from "../actions/postActions";

export const postsMiddleware = () => {
  return async (dispatch) => {
    dispatch(updateStatus("pengding"));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(loadPosts(data));

    dispatch(updateStatus("idle"));
  };
};
