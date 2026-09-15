import "./assets/style.css";
import Post from "./components/Posts/Post";
import Product from "./components/Products/Product";
// import Counter from "./components/Counter/Counter";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind</h1>
      <Post />
      <Product />
    </div>
  );
}
