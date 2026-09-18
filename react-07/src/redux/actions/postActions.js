export const fetchPosts = () => {
  return {
    type: "posts/fetchApi",
  };
};

export const loadPosts = (data) => {
  return {
    type: "posts/loadData",
    payload: data,
  };
};

export const updateStatus = (status) => {
  return {
    type: "posts/updateStatus",
    payload: status,
  };
};
