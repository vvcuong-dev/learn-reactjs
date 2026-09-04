import "./App.css";
import { createContext, useState } from "react";
import Theme from "./component/Theme";

export const AppContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <h1>Hello, React!</h1>
      <AppContext.Provider
        value={{
          theme: theme,
          setTheme: setTheme,
        }}
      >
        <Theme />
      </AppContext.Provider>
    </>
  );
}

export default App;
