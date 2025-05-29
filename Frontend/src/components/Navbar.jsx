import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/test", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`message from backend ${data.message}`);
        setMessage(data.message);
      })
      .catch((err) => console.log("Error fetching data", err));
  }, []);
  return (
    <>
      <nav className="flex justify-between border h-16 items-center px-2">
        <div>
          <a href="#">Placemate</a>
          <a href="#">Message from backend : {message}</a>
        </div>
        <div>
          <Link to="/"></Link>
          <Link to="/home">Home</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
