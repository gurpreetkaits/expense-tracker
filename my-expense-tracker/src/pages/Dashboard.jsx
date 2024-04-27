import React from "react";
import { useState } from "react";
import "../assets/css/dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="container border border-gray-300 px-4 py-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md border">
            <h1 className="text-sm mb-4">Total Expenses</h1>
            <p className="text-3xl">$0</p>
          </div>
          <div className="bg-white p-4 rounded-md border">
            <h1 className="text-sm mb-4">Total Income</h1>
            <p className="text-3xl">$0</p>
          </div>
          <div className="bg-white p-4 rounded-md border">
            <h1 className="text-sm mb-4">Balance</h1>
            <p className="text-3xl">$0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
