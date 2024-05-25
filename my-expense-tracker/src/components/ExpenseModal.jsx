import React, { useState } from "react";
import axios from "axios";

// Create an Axios instance with baseURL from environment variables
const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor for CSRF token
api.interceptors.request.use(
  (config) => {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    if (token) {
      config.headers["X-CSRF-TOKEN"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ExpenseModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("expense");

  const saveForm = async (data) => {
    try {
      const response = await api.post("/transactions", data);
      console.log("Form saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { amount, description, type };
    saveForm(formData);
    setAmount("");
    setDescription("");
    setType("expense");
    onClose();
  };

  return (
    <div className={`fixed z-1000 inset-0 overflow-y-auto ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <h1 className="text-lg font-bold mb-4">Add Expense or Income</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <div className="mt-4 flex justify-between gap-1">
                <button type="submit" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add
                </button>
                <button onClick={onClose} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
