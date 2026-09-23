import { useContext } from "react";
import { AppContext } from "../App";

export default function Product() {
  const { title, setTitle } = useContext(AppContext);

  return (
    <div>
      <h1>{title}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, in.</p>
      <button onClick={() => setTitle("New Title")}>Change title</button>
    </div>
  );
}
