import "./App.css";
import Comment from "./components/comment.component";
import Member from "./components/member.component";

/**
 * 1. Render có điều kiện
 *  - dùng if else
 *  - dùng toán tử 3 ngôi
 * 2. Render với vòng lặp (map)
 *
 */

function App() {
  const members = [
    {
      name: "Cuong Vu",
      age: 22,
      shippingAddress: "123 Main St",
      comment: {
        title: "This is cuong's comment",
        content: "This is cuong's comment content",
      },
    },
    {
      name: "Nguyen Van A",
      age: 24,
      shippingAddress: "456 Elm St",
      comment: {
        title: "This is A's comment",
        content: "This is A's comment content",
      },
    },
    {
      name: "Le Thi B",
      age: 30,
      shippingAddress: "789 Oak St",
      comment: {
        title: "This is B's comment",
        content: "This is B's comment content",
      },
    },
  ];

  const memberList = members.map((member, index) => {
    return (
      <Member
        key={index}
        name={member.name}
        age={member.age}
        shippingAddress={member.shippingAddress}
        comment={
          <Comment
            title={member.comment.title}
            content={member.comment.content}
          />
        }
      />
    );
  });

  return <>{memberList}</>;
}

export default App;
