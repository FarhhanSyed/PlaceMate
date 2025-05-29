import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from './pages/Home.jsx';
import Quizzes from './pages/Quizzes.jsx';
import Resources from './pages/Resources.jsx';
import About from './pages/About.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quizzes" element={<Quizzes />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
