import { useCallback } from "react";

type HandleClick = (event: React.MouseEvent<HTMLElement>) => void;

export default function App() {
  const handleClick: HandleClick = useCallback((event) => {
    console.log("Button clicked: ", event);
  }, []);

  return (
    <div>
      <h1>Count: 0</h1>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "lightblue",
            border: "1px solid blue",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "lightcoral",
            border: "1px solid red",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          // onClick={() => handleClick("Hello, World!")}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            backgroundColor: "lightgray",
            border: "1px solid gray",
            cursor: "pointer",
          }}
        >
          Click me 1
        </button>
        <button
          onClick={handleClick}
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            backgroundColor: "lightgreen",
            border: "1px solid gray",
            cursor: "pointer",
          }}
        >
          Click me 2
        </button>
      </div>
      <p onClick={handleClick}>
        lorem1000 ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
