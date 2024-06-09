import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { axiosInstance } from "../services/api";
import { useNavigate } from "react-router";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  // Todo: Change URL to env global variabl
  const checkAuth = async () => {
    try {
      await axiosInstance.get("/sanctum/csrf-cookie");
      const response = await axiosInstance.get("/api/user", {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error checking auth:", error);
      setUser(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      await axiosInstance.get("/sanctum/csrf-cookie", {
        withCredentials: true,
      });
      const loginRes = await axiosInstance.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem("authToken", loginRes.data.token);
      checkAuth();
      setError(null); // Clear any previous errors
      window.location.replace('/app/dashboard')
    } catch (error) {
      console.error("Login error:", error);
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
    navigate("/login");
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await axiosInstance.post("/api/register", {
        name,
        email,
        password,
      });
      setUser(data.user);
      localStorage.setItem("authToken", data.token);
      window.location.replace('/app/dashboard')
      setError(null);
    } catch (e) {
      if (e.response && e.response.data) {
        setRegisterError(e.response.data || "Login failed");
      } else {
        setRegisterError("An error occurred");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, error, registerError, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
