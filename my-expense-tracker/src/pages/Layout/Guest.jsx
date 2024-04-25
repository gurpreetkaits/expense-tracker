import React from "react";
import LoginForm from "../Auth/Login";

const Guest = ({whichPage}) => {
  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {whichPage == 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Guest;
