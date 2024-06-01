// services/api.js
import axios from "axios";

const baseURL = "http://localhost:8000/api"; // Replace with your API base URL
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "authToken"
)}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addTransaction = (data) => {
  return axiosInstance.post("/transactions", data);
};

export { axiosInstance };
