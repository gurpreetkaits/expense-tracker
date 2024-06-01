import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import { axiosInstance } from "../services/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user");
        setUser(data);
      } catch {
        setUser(null);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("/login", { email, password });
      localStorage.setItem("authToken", data.access_token);
      const { data: userData } = await axiosInstance.get("/user");
      setUser(userData);
      setError(null); // Clear any previous errors
    } catch (error) {
        console.log('provider error',error);
      // Handle validation errors or other types of errors
      if (error.response && error.response.data) {
        setError(error.response.data || "Login failed");
      } else {
        setError("An error occurred");
      }
    }
  };

  const logout = async () => {
    await axiosInstance.post("/api/logout");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
