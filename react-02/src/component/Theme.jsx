import "../assets/styles.css";
import Content from "./Content";
import { useContext } from "react";
import { AppContext } from "../App";
import ThemeToggle from "./ThemeToggle";

export default function Theme() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`theme-${theme}`}>
      <ThemeToggle />
      <Content />
    </div>
  );
}
