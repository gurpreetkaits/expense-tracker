import React from "react";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";
import { Outlet } from "react-router";

const GuestLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default GuestLayout;
