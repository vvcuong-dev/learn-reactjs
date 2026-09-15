import style from "./Post.module.css";

export default function Post() {
  return (
    <div className="post">
      <h1>Hello, Post</h1>
      <button className={style.btn}>Xem chi tiết</button>
    </div>
  );
}
