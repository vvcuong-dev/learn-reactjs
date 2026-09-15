import "./assets/style.css";
import Post from "./components/Posts/Post";
import Product from "./components/Products/Product";
// import Counter from "./components/Counter/Counter";

export default function App() {
  return (
    <div className="app-container">
      <Post />
      <Product />
    </div>
  );
}
