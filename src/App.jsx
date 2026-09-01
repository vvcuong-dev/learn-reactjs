import "./App.css";
import { useState } from "react";
import PostComponent from "./components/post-use-effect";

function App() {
  const [reloadKey, setReloading] = useState(false);
  const handleReload = () => {
    setReloading(new Date().getTime());
  };

  return (
    <>
      <button onClick={handleReload}>Reload</button>
      <PostComponent reloadKey={reloadKey} />
    </>
  );
}

export default App;
