import { useContext } from "react";
import { AppContext } from "../App";

export default function Heading() {
  const context = useContext(AppContext);
  console.log("Heading.jsx - context:", context);
  return (
    <div>
      <h2>Heading</h2>
      <p>Context Value - heading: {context}</p>
    </div>
  );
}
