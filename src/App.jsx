import "./App.css";
import Member from "./components/member.component";
import Comment from "./components/comment.component";

/**
 * 1. Render có điều kiện
 *  - dùng if else
 *  - dùng toán tử 3 ngôi
 * 2. Render với vòng lặp (map)
 *
 */

function App() {
  return (
    <>
      <Member
        name="Cuong Vu"
        age={22}
        shipping-address="123 Main St"
        comment={
          <Comment
            content="Online learning is the future of education !"
            title="Comment by Cuong Vu"
          />
        }
      />

      <Member
        name="Nguyễn Văn A"
        age={24}
        shipping-address="Hồ Chí Minh"
        comment={
          <Comment
            content="Online learning is the future of education !"
            title="Comment by Nguyễn Văn A"
          />
        }
      />
    </>
  );
}

export default App;
