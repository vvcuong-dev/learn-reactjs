import { useContext } from "react";
import { Provider01Context } from "./Provider01.jsx";

export const useDispatch = () => {
  const { dispatch } = useContext(Provider01Context);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("useSelector requires a callback function as an argument");
  }

  const { state } = useContext(Provider01Context);
  return callback(state);
};
