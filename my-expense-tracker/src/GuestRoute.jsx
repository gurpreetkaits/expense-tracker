import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

const GuestRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    // You can render a loading spinner or some placeholder here
    return <div>Loading...</div>;
  }
  return user ? <Navigate to="/app/dashboard" /> : children;
};

export default GuestRoute;
