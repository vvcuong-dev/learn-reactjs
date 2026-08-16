function Post(props) {
  const { posts, name } = props;
  const postJsx = posts.map((post, index) => {
    return (
      <p key={index}>
        <h3 style={{ color: "green" }}>
          {post.title} - <i>by {name}</i>
        </h3>
        <p>{post.content}</p>
      </p>
    );
  });

  return (
    <>
      <h3>Danh sách bài viết</h3>
      <ul>{postJsx}</ul>
    </>
  );
}

export default Post;
