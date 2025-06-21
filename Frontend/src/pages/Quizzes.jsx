import React from "react";
import QuizCard from "../components/QuizCard";
import Profile from "../components/Profile";
import {
  faNetworkWired,
  faDatabase,
  faBrain,
  faCode,
  faBullseye,
  faTrophy,
  faCirclePlay,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quizzes = () => {
  let quizTypes = [
    {
      id: 1,
      title: "Aptitude & Reasoning",
      description:
        "Test your quantitative aptitude, logical reasoning, and verbal ability skills.",
      icon: faBrain,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      buttonColor: "bg-blue-600",
      quizType: "aptitude",
    },
    {
      id: 2,
      title: "Computer Networks",
      description:
        "Master networking concepts, protocols, and network security fundamentals.",
      icon: faNetworkWired,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600",
      quizType: "cn",
    },
    {
      id: 3,
      title: "OPPs Concepts",
      description:
        "Practice object-oriented programming principles and design patterns.",
      icon: faCode,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      buttonColor: "bg-purple-600",
      quizType: "oops",
    },
    {
      id: 4,
      title: "DBMS",
      description:
        "Test your database management and SQL query writing skills.",
      icon: faDatabase,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100",
      buttonColor: "bg-indigo-600",
      quizType: "dbms",
    },
    {
      id: 5,
      title: "Data Structures",
      description:
        "Practice arrays, trees, graphs, and algorithm implementation..",
      icon: faBullseye,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      buttonColor: "bg-orange-600",
      quizType: "dsa",
    },
  ];
  return (
    <>
      <div className="mt-18">
        <div className="flex">
          <div>
            <Profile />
          </div>

          <div className="mt-10 ml-8">
            <h1 className="text-4xl mb-1 font-bold">Practice Quizzes</h1>
            <p className="text-gray-700">
              Choose a subject to start practicing for your placement tests
            </p>
            <div className="flex flex-wrap mt-6">
              {quizTypes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  title={quiz.title}
                  description={quiz.description}
                  icon={quiz.icon}
                  iconColor={quiz.iconColor}
                  bgColor={quiz.bgColor}
                  buttonColor={quiz.buttonColor}
                  quizType={quiz.quizType}
                />
              ))}
            </div>
            <div className="w-250 h-50 border-2 border-emerald-400 rounded-lg mb-10 hover:shadow-lg transition-shadow">
              <div className="flex space-x-4 ml-5 mt-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-lg flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-emerald-600"
                  />
                </div>
                <div>
                  <p className="font-bold text-xl">Full Length Mock Test</p>
                  <p className="text-gray-500 text-sm">Mixed Questions </p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 ml-5 mt-4">
                  Complete placement test simulation with questions from all
                  subjects. Perfect for final preparation.
                </p>
                <button className=" mt-4 ml-5 w-210 h-9 text-white bg-emerald-600 rounded-lg cursor-pointer">
                  <FontAwesomeIcon icon={faCirclePlay} className="mr-3" />
                  <span className="text-sm">Start Quiz</span>
                </button>
                <button className=" ml-2 w-20 h-9 border-1 border-gray-200 rounded-lg">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-2 text-gray-600"
                  />
                  <span className="text-sm">Timed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;
