import React from "react";
import LatestTransactions from "../components/LatestTransactions";
import { useState } from "react";
import BottomNavigationMenu from "../components/BottomNavigationMenu";
import "../assets/css/dashboard.css";
import BottomDialogBox from "../components/BottomDialog";

function Dashboard() {
  const [dialogOpen, setDialogOpen] = useState(true);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center my-4">Dashboard</h1>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <LatestTransactions />
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="row position-relative" id="transactionModalRow">
        <BottomNavigationMenu showTransactionModal={toggleDialog} />
      </div>
      <BottomDialogBox isOpen={dialogOpen} onClose={toggleDialog} />
    </>
  );
}

export default Dashboard;
