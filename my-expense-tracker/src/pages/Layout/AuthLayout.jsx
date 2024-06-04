import PanelNav from "./Parts/PanelNav";
import Sidebar from "./Parts/Sidebar";
import { Outlet } from "react-router";
function AuthLayout() {
  return (
    <>
      <PanelNav />
      <div className="container  grid grid-cols-5 ">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
