import { Outlet } from "react-router";
import "./assets/index.css";
import PanelNav from "./pages/Layout/Parts/PanelNav";
import Sidebar from "./pages/Layout/Parts/Sidebar";

function App() {
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

export default App;
