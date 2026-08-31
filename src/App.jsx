import "./App.css";
import Product from "./components/api/product.api";
import { getUser } from "./ultis/user.util";

function App() {
  console.log(getUser());

  return (
    <>
      <h1>API ReactJS</h1>
      <Product />
    </>
  );
}

export default App;
