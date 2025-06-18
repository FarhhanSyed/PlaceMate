import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/Auth";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
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
  const handleClick = async () => {
    await logout();
    navigate("/login");
  };
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
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
