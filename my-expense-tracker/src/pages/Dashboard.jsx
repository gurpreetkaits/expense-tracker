import React from "react";
import Navbar from "../components/Navbar";
import DifferenceBarChart from "../components/DifferenceBarChart";
import LatestTransactions from "../components/LatestTransactions";
import AddTransactionModel from "../components/AddTransactionModal";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  const handleOnClick = () => {
    setShowModal(true);
  };
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center my-4">Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-primary" onClick={handleOnClick}>
              Add
            </button>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <LatestTransactions />
          </div>
        </div>
      </div>
      <AddTransactionModel isOpen={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Dashboard;
