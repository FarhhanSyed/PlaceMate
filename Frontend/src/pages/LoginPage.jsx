import React, { useState } from "react";

const LoginPage = () => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="px-4">
      <div className="text-center mt-15">
        <div className="flex justify-center items-center space-x-3 mb-3">
          <div className="bg-[#00966A] text-white text-lg p-2 rounded-lg">
            <code>{"</>"}</code>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 ">PlaceMate</h2>
        </div>
        <p className="text-gray-600">
          Welcome back to your Placement preparation journey
        </p>
      </div>

      <div className="max-w-md w-full bg-white p-5 rounded-xl shadow-lg m-auto mt-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
            Sign In
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your credentials to acces your account
          </p>
        </div>

        <form className="space-y-4 mt-3">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <br></br>
            <input
              className="mt-1 w-full border-1 border-gray-300 rounded-md px-3 py-1.5 placeholder:text-left"
              type="text"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              required
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <br></br>
            <input
              className="mt-1 w-full border-1 border-gray-300 rounded-md px-3 py-1.5 placeholder:text-left"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              required
              onChange={handleChange}
            ></input>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <input type="checkbox" id="remember"></input>
              <label htmlFor="remember" className="text-sm ml-1 text-gray-600">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-[#00966A]">
              Forgot Password?
            </a>
          </div>

          <div>
            <button className="w-full bg-[#00966A] text-white rounded-lg px-2 py-1.5 font-normal transition-all duration-200 hover:scale-105 hover:bg-[#007A55] cursor-pointer">
              Log In
            </button>
          </div>

          <div className="flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-between items-center">
            <button className="border-1 border-gray-200 rounded-lg px-2 py-1.5 w-50 font-medium cursor-pointer">
              Google
            </button>
            <button className="border-1 border-gray-200 rounded-lg px-2 py-1.5 w-50 font-medium cursor-pointer">
              Github
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6 mb-3 text-center">
            Dont't have an account?
            <a
              href="/signup"
              className="text-green-600 font-medium ml-1 cursor-pointer"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
