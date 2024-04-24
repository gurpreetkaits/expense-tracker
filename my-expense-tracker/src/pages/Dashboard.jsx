import React from "react";
import LatestTransactions from "../components/LatestTransactions";
import { useState } from "react";
import BottomNavigationMenu from "../components/BottomNavigationMenu";
import "../assets/css/dashboard.css";
import BottomDialogBox from "../components/BottomDialog";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <LatestTransactions />
          </div>
        </div>
        {/* Bottom Navigation */}
        <BottomNavigationMenu showTransactionModal={toggleDialog} />
        {/* Bottom Dialog Box */}
        <BottomDialogBox isOpen={dialogOpen} onClose={toggleDialog} />
      </div>
    </>
  );
}

export default Dashboard;
