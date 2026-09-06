import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./stores/store.js";
import Provider01 from "./utils/Provider01.jsx";

// const store = [rootReducer, initialState]; truyền cho Provider01
createRoot(document.getElementById("root")).render(
  <Provider01 store={store}>
    <App />
  </Provider01>,
);
