import { Navigate } from "react-router-dom";

export const navigateToForbidden = () => {
  return <Navigate to="/403" />;
};
