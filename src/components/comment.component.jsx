function Comment(props) {
  return (
    <div className="comment">
      <h3 style={{ color: "blue" }}>{props.title}</h3>
      <p style={{ color: "green" }}>{props.content}</p>
    </div>
  );
}

export default Comment;
