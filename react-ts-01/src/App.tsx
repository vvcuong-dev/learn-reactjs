import Product from "./Components/Product";
import { createContext, useState } from "react";

type AppContextType = {
  title: string;
  setTitle: (title: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextType>({} as AppContextType);

export default function App() {
  const [title, setTitle] = useState<string>("Demo Context");

  return (
    <AppContext.Provider value={{ title: title, setTitle }}>
      <Product />
    </AppContext.Provider>
  );
}
