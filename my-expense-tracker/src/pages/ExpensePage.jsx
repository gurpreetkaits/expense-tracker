import React from "react";
import { useState } from "react";
import "../assets/css/dashboard.css";
function Expenses() {
  return (
    <>
      <div className="main-content border border-gray-300 px-4 py-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Expenses</h1>
        <div className="border rounded-md">
          <div id="filters"></div>
          <table className="w-full rounded-md">
            <thead>
              <tr className="text-left bg-gray-100 p-2 text-sm mb-4">
                <th className="px-2 py-1">Date</th>
                <th className="px-2 py-1">Category</th>
                <th className="px-2 py-1">Amount</th>
                <th className="px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="px-2 py-1 font-medium">2021-09-01</td>
                <td className="px-2 py-1 font-medium">Food</td>
                <td className="px-2 py-1 font-medium">100</td>
                <td className="px-2 py-">
                  <button className="bg-gray-800 text-sm hover:bg-gray-900 transition-all ease-in-out py-0 px-2 text-white rounded-md ">
                    Edit
                  </button>
                  <button className="sm:ms-1 text-sm hover:bg-red-700 transition-all ease-out bg-red-600 py-0 px-2 text-white rounded-md ">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Expenses;
