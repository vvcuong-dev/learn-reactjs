import { loadPosts } from "../actions/postActions";
import { updateStatus } from "../actions/postActions";

export const postsMiddleware = () => {
  return async (dispatch) => {
    dispatch(updateStatus("pending"));

    const start = Date.now();
    const MIN_LOADING_TIME = 400;

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();

      const elapsed = Date.now() - start;
      if (elapsed < MIN_LOADING_TIME) {
        await new Promise((resolve) =>
          setTimeout(resolve, MIN_LOADING_TIME - elapsed),
        );
      }

      dispatch(loadPosts(data));
      dispatch(updateStatus("idle"));
    } catch {
      dispatch(updateStatus("error"));
    }
  };
};
