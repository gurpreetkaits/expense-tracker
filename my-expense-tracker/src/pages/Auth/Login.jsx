import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
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
        <h1 className="text-2xl text-black mt-3 font-bold mb-4 text-center">
          Login
        </h1>
        <form action="#" method="POST">
          <div className="mb-4 mx-3">
            <label
              for="email"
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
          <div className="mb-6 mx-3">
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md
              pt-1 pb-1 pl-2  focus:outline-none
            transition ease-in-out duration-700 bg-gray-100
        "
              placeholder="Password"
            />
          </div>
          <div className="mb-6 mx-4">
            <Link
              to="/forget-password"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="flex items-center justify-center mb-2 mx-3">
            <button
              type="submit"
              className="text-white bg-black pl-8 pr-8 py-1 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 "
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center mb-2 mx-3">or</div>
          <div className="flex items-center justify-center mb-2 mx-3">
            <button
              type="submit"
              className="text-black hover:bg-gray-200 transition-all w-full bg-gray-100 pl-8 pr-8 py-1 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <span className="flex items-center justify-center "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
						<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
						<path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
						<path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
						<path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
					</svg>
                    <span className="ml-2">Signup With Google</span>
                    </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
