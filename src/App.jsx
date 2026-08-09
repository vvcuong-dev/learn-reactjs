import React from "react";
import "./App.css";
import Header from "./header.jsx";

function App() {
  const element = React.createElement(
    "div",
    { className: "title" },
    React.createElement(
      "h2",
      {
        className: "highlight",
        id: "highlight",
        style: { color: "blue", marginBottom: "10px" },
      },
      "Hello, React!",
    ),

    React.createElement(
      "a",
      {
        href: "https://reactjs.org",
        target: "_blank",
        style: { color: "green" },
      },
      "Xem thêm về ReactJS",
    ),

    React.createElement(
      "p",
      { className: "desc", id: "desc" },
      "Learning React is fun and exciting!",
    ),
  );

  return (
    <>
      <Header />
      {element}
    </>
  );
}

export default App;
