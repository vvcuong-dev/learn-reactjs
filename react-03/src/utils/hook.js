import { useContext } from "react";
import { ProviderContext } from "./Provider.jsx";

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("useSelector requires a callback function as an argument");
  }

  const { state } = useContext(ProviderContext);
  return callback(state);
};
