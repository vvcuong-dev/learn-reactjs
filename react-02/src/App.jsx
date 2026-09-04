import "./App.css";
import { createContext } from "react";
import Content from "./component/Content";
import Heading from "./component/Heading";
// import User from "./component/User";

export const AppContext = createContext(null);

function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <AppContext.Provider value="This is context value from App.jsx">
        <Content />
        <Heading />
      </AppContext.Provider>
    </>
  );
}

export default App;
