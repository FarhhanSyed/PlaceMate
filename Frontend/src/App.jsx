import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./components/Layout.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Features from "./pages/Features.jsx";
import StartQuiz from "./pages/StartQuiz.jsx";
import QuizTaking from "./components/QuizTaking.jsx";
import ResultPage from "./pages/ResultPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/quizzes" element={<Quizzes />}></Route>
            <Route
              path="/quizzes/startquiz/:quizType"
              element={<StartQuiz />}
            />
            <Route
              path="/quizzes/startquiz/:quizType/take"
              element={<QuizTaking />}
            />
            <Route path="/quizzes/:quizType/result" element={<ResultPage />} />
            <Route path="/features" element={<Features />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
