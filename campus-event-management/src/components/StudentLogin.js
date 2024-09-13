import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const StudentLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/users", { username, password })
      .then((res) => {
        if (res.data.success) {
          navigate("/StudentDashboard");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <div className="absolute top-[25%] left-[5%] md:left-[10%] flex flex-col px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold my-4">
            Turn your idea into reality
          </h1>
          <p className="text-lg md:text-xl text-white font-normal">
            Step into a world of events and opportunities. Your next adventure
            starts here!
          </p>
        </div>
        <img
          src="/bright.JPG"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-full bg-[#E0E0E0] flex flex-col p-10 md:p-20 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col max-w-[400px] md:max-w-[500px]"
        >
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              User Login
            </h3>
            <p className="text-base mb-2">Welcome to AAU Event System</p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember Me For 30 days</p>
            </div>
            <p className="w-full flex justify-end text-sm  cursor-pointer underline underline-offset-1">
              Forget Password
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              type="submit"
              className="w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Log in
            </button>
            <Link to="/UserRegistration">
              <button
                type="submit"
                className="w-full my-2 font-semibold text-[#060606] bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
