import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container pv-3">
      <div className="w-50 mx-auto">
        <h1>Auth Layout</h1>
        <Outlet />
      </div>
    </div>
  );
}
