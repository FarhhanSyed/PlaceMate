import React from "react";
import { useParams } from "react-router-dom";
import StartQ from "../components/StartQ";

const StartQuiz = () => {
  const quizData = {
    aptitude: {
      title: "Aptitude Quiz",
      description:
        "Test your quantitative aptitude, logical reasoning, and verbal ability skills.",
      difficulty: "Medium",
      noOfQuestions: 30,
      duration: 40,
    },
    cn: {
      title: "Computer Networks",
      description:
        "Master networking concepts, protocols, and network security fundamentals.",
      difficulty: "Hard",
      noOfQuestions: 30,
      duration: 30,
    },
    oops: {
      title: "OOPs Concepts",
      description:
        "Practice object-oriented programming principles and design patterns.",
      difficulty: "Medium",
      noOfQuestions: 30,
      duration: 30,
    },
    dbms: {
      title: "DBMS Quiz",
      description:
        "Test your database management and SQL query writing skills.",
      difficulty: "Medium",
      noOfQuestions: 30,
      duration: 30,
    },
    dsa: {
      title: "Data Structures",
      description:
        "Practice arrays, trees, graphs, and algorithm implementation.",
      difficulty: "Hard",
      noOfQuestions: 30,
      duration: 30,
    },
    mt: {
      title: "Mock Test",
      description:
        "Complete placement test simulation with questions from all subjects.",
      difficulty: "Mixed",
      noOfQuestions: 50,
      duration: 60,
    },
  };
  const { quizType } = useParams();
  const quiz = quizData[quizType];

  if (!quiz) return <h2>Quiz not found!</h2>;
  return <StartQ quiz={quiz} />;
};

export default StartQuiz;
