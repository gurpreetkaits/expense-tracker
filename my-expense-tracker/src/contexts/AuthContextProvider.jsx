import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import { axiosInstance } from "../services/api";
import { useNavigate } from "react-router";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  // Todo: Change URL to env global variabl
  const backendUrl = 'http://localhost:8000/api';
  
  console.log(backendUrl);
   useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/user', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("/login", { email, password });
      localStorage.setItem("authToken", data.access_token);
      const { data: userData } = await axiosInstance.get("/user");
      setUser(userData);
      setError(null); // Clear any previous errors
      navigate('/app/dashboard');
    } catch (error) {
      console.log("provider error", error);
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

  const register = async (name,email,password) => {
    try {
      const { data } = await axiosInstance.post("/register",{name,email,password});
      console.log(data);
    } catch (e) {
      if (e.response && e.response.data) {
        setRegisterError(e.response.data || "Login failed");
      } else {
        setRegisterError("An error occurred");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, error,registerError, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
