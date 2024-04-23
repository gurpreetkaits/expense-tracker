// BottomDialogBox.js
import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/BottomDialogBox.css";

const BottomDialogBox = ({ isOpen, onClose }) => {
  // Initialize state for the date
  const [date, setDate] = useState(getFormattedDate());

  // Function to get the current date in the format YYYY-MM-DD
  function getFormattedDate() {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Set the default date value when the component mounts
  useEffect(() => {
    setDate(getFormattedDate());
  }, []);

  // Event handler to update the date when changed by the user
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className={`bottom-dialog-container ${isOpen ? "open" : ""} rounded`}>
      <div className="bottom-dialog-content">
        <form action="">
          <div className="form-group my-2">
            <label className="mb-1" htmlFor="category">
              Category
            </label>
            <input type="text" className="form-control" id="category" />
          </div>
          <div className="form-group my-2">
            <label className="mb-1" htmlFor="amount">
              Amount
            </label>
            <input type="number" className="form-control" id="amount" />
          </div>
          <div className="form-group my-2">
            <label className="mb-1" htmlFor="type">
              Type
            </label>
            <select className="form-control" id="type">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group my-2">
            <label className="mb-1" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group my-2">
            <label className="mb-1" htmlFor="note">
              Note
            </label>
            <textarea className="form-control" id="note" rows="3"></textarea>
          </div>
          <div className="form-group my-2">
            <button type="submit" className="btn btn-primary">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BottomDialogBox;
