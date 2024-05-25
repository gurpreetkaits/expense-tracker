import React from "react";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";
import { Outlet } from "react-router";

const GuestLayout = ({ whichPage }) => {
  // return <>{whichPage == "login" ? <LoginForm /> : <RegisterForm />}</>;
  return (
    <>
      <Outlet />
    </>
  );
};

export default GuestLayout;
