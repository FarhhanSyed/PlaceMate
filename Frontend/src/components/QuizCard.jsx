import React from "react";
import { Link } from "react-router-dom";
import { faCirclePlay, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizCard = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
  buttonColor,
  quizType,
}) => {
  return (
    <>
      <div className="w-120 h-50 border-1 border-gray-200 rounded-lg mr-5 mb-6 hover:shadow-md">
        <div className="flex space-x-5 mx-6 mt-6">
          <div
            className={`${bgColor} rounded-lg flex justify-center items-center h-12 w-12`}
          >
            <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
          </div>
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <p className="text-gray-600 mx-4 mt-3">{description}</p>
        <div className="flex space-x-5 mx-4 mt-3 ">
          <button
            className={`w-80 h-9 text-white ${buttonColor} rounded-lg cursor-pointer`}
          >
            <Link to={`/quizzes/startquiz/${quizType}`}>
              <FontAwesomeIcon icon={faCirclePlay} className="mr-3" />
              <span className="text-sm">Start Quiz</span>
            </Link>
          </button>
          <button className="w-20 h-9 bg-gray-200 rounded-lg">
            <FontAwesomeIcon icon={faClock} className="mr-3" />
            <span className="text-sm">Timed</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
