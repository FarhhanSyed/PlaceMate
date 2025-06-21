import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <>
      <div className="m-2 border-1 border-gray-200 mt-10 ml-10 h-78 w-70 rounded-lg box-shadow bg-white">
        <div className=" px-4 py-5 flex space-x-5 items-center mb-2">
          <div className="h-15 w-15 rounded-full bg-emerald-300 flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="color-emerald-700" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Student Name</h2>
            <p className="text-gray-700">Quiz Enthusiast</p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 mb-3 mx-4 px-3 py-2">
          <h2 className="font-semibold text-md">Overall Score</h2>
          <h1 className="text-emerald-600 font-bold text-3xl">85%</h1>
          <p className="text-gray-600 text-sm">Average across all subjects</p>
        </div>

        <div className="mx-4 mt-4">
          <div className="flex justify-between mt-1">
            <p className="text-sm text-gray-600">Quizzes Completed</p>
            <p className="font-semibold">3</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-600">Time Spent</p>
            <p className="font-semibold">8hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
