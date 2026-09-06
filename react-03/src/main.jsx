import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Provider from "./utils/Provider.jsx";
import { store } from "./stores/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
