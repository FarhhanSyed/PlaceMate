import React from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/Auth";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between border-b backdrop-blur-sm border-gray-100 items-center p-6 bg-white/95">
        <div className="flex items-center">
          <div className="w-9 h-9 bg-[#00966A] text-white rounded-lg flex items-center justify-center mr-3">
            <code>{"</>"}</code>
          </div>
          <span className="text-2xl font-bold text-gray-900">PlaceMate</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          ></Link>
          <Link
            to="/home"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            Features
          </Link>
          <Link
            to="/quizzes"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            Quizzes
          </Link>
          <Link
            to="/resources"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
          >
            About
          </Link>
        </div>

        <div className="flex space-x-4">
          {user ? (
            <>
              <span>Hi, {user.name} </span>
              <button
                onClick={handleClick}
                className="bg-[#00966A] text-white text-md p-1.5 rounded-lg cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                variant="ghost"
                className=" bg-white rounded-lg px-2.5 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100 hover:rounded-lg font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#00966A] rounded-lg px-2.5 py-2 text-sm font-medium hover:bg-emerald-700 text-white"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
