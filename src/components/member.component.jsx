import Post from "./post.component";

function Member(props) {
  const { name, age, shippingAddress, comment, posts } = props;
  return (
    <div className="member">
      <h2>Member Name: {name}</h2>
      <p>Tuổi: {age}</p>
      <p>Địa chỉ giao hàng: {shippingAddress}</p>
      {comment}
      <Post posts={posts} {...props} />
    </div>
  );
}

export default Member;
