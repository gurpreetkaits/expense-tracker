import React from "react";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="m-20 rounded-lg my-6 p-3 w-96 bg-white ">
        <div className="logo">
            <img
                src="https://source.unsplash.com/user/c_v_r"
                alt="logo"
                className="w-20 h-20 mx-auto rounded-full"
            />
        </div>
        <h1 className="text-2xl text-black mt-3 font-bold mb-4 text-center">Register</h1>
        <form action="#" method="POST">
          <div className="mb-4 mx-4">
            <label
              htmlFor="email"
              className="block text-sm  font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-gray-100
            pt-1 pb-1 pl-2 focus:outline-none
            transition ease-in-out duration-300
            border-gray-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 mx-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md
              pt-1 pb-1 pl-2  focus:outline-none
            transition ease-in-out duration-700 bg-gray-100
        "
              placeholder="Password"
            />
          </div>
          <div className="mb-6 mx-4">
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Login?
            </Link>
          </div>
          <div className="flex items-center justify-center mb-2">
            <button
              type="submit"
              className="text-white border min-w-full bg-black pl-5 pr-5 py-1 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
