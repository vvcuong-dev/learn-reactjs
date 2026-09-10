import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function MainLayout() {
  return (
    <div className="container pv-3">
      <div className="row">
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
