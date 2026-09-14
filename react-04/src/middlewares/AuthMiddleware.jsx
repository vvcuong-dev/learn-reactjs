import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = false; // giả sử user chưa login

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to="/auth/login" />;
}
