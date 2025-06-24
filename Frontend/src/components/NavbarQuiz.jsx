import React from "react";
import { Link } from "react-router-dom";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarQuiz = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b backdrop-blur-sm border-gray-100 flex justify-between">
        <div className="flex space-between space-x-4 ml-14 py-3 items-center mt-1 mb-1">
          <div className="w-10 h-10 bg-[#00966A] text-white rounded-lg flex justify-center items-center">
            <Link to="/home">
              <code className="cursor-pointer">{"</>"}</code>
            </Link>
          </div>
          <span className="text-2xl font-bold text-gray-900">PlaceMate</span>
        </div>
        <div className="flex justify-center items-center space-x-8 mr-20">
          <div className="flex items-center space-x-2 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition ">
            <FontAwesomeIcon icon={faUser} className="text-gray-400" />
            <button className="text-sm text-gray-700">Profile</button>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition  ">
            <FontAwesomeIcon icon={faChartSimple} className="text-gray-400" />
            <button className="text-sm text-gray-700">DashBoard</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarQuiz;
