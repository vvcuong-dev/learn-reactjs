import { useContext } from "react";
import { AppContext } from "../App";

export default function Content() {
  const contextValue = useContext(AppContext);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, enim?
      <p>Context Value - content: {contextValue}</p>
    </div>
  );
}
