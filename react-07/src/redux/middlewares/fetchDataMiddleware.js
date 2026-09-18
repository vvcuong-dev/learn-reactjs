import { loadPosts } from "../actions/postActions";
import { updateStatus } from "../actions/postActions";

export const fetchDataMiddleware = (store) => {
  return (next) => {
    return async (action) => {
      if (action.type === "posts/fetchApi") {
        try {
          store.dispatch(updateStatus("loading"));
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
          );
          const data = await response.json();
          store.dispatch(loadPosts(data));
          store.dispatch(updateStatus("idle"));
        } catch (error) {
          console.error("Error fetching posts:", error);
          store.dispatch(updateStatus("error"));
        }
      }
      next(action);
    };
  };
};
