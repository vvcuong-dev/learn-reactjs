import "./App.css";
import Header from "./header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="block">
        <h2 className="sub-title" id="sub-title">
          This is a block element with a background color and padding. It is
          styled using the App.css file.
        </h2>
        <h1 className="title" id="title">
          React + Vite
        </h1>
        <p className="description" id="description">
          This is a simple React application created using Vite.{" "}
          <a
            style={{ color: "green" }}
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Vite
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default App;
