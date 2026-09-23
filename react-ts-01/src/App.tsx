import Input from "./Components/Input";
import { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef);
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <Input ref={inputRef} value={"Cường"} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
