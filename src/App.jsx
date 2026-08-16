import "./App.css";
// import Comment from "./components/comment.component";
// import Member from "./components/member.component";
import Event01 from "./events/event-01";
import Event02 from "./events/event-02";

function App() {
  // const members = [
  //   {
  //     name: "Cuong Vu",
  //     age: 22,
  //     shippingAddress: "123 Main St",
  //     comment: {
  //       title: "This is cuong's comment",
  //       content: "This is cuong's comment content",
  //     },
  //     posts: [
  //       {
  //         title: "Post 1",
  //         content: "This is the content of post 1",
  //       },
  //       {
  //         title: "Post 2",
  //         content: "This is the content of post 2",
  //       },
  //       {
  //         title: "Post 3",
  //         content: "This is the content of post 3",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Nguyen Van A",
  //     age: 24,
  //     shippingAddress: "456 Elm St",
  //     comment: {
  //       title: "This is A's comment",
  //       content: "This is A's comment content",
  //     },
  //     posts: [
  //       {
  //         title: "Post 4",
  //         content: "This is the content of post 4",
  //       },
  //       {
  //         title: "Post 5",
  //         content: "This is the content of post 5",
  //       },
  //       {
  //         title: "Post 6",
  //         content: "This is the content of post 6",
  //       },
  //     ],
  //   },
  // ];

  // const memberList = members.map((member, index) => {
  //   return (
  //     <Member
  //       key={index}
  //       name={member.name}
  //       age={member.age}
  //       shippingAddress={member.shippingAddress}
  //       comment={
  //         <Comment
  //           title={member.comment.title}
  //           content={member.comment.content}
  //         />
  //       }
  //       posts={member.posts}
  //     />
  //   );
  // });

  return (
    <>
      <Event01 />
      <Event02 />
    </>
  );
}

export default App;
