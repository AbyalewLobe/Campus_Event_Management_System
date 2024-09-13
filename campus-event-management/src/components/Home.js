import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex justify-between p-3 bg-blue-600 text-black">
        <div className="ml-10 font-bold uppercase">
          <h1>AAU Events</h1>
        </div>
        <div className="text-black ">
          <a className="p-2" href="">
            {" "}
            <Link to="/" className="text-black">
              Home
            </Link>{" "}
          </a>
          <a className="p-2" href="">
            <Link to="/AdminLogin" className="text-black">
              Admin
            </Link>
          </a>
          <a className="p-2" href="">
            <Link to="/StudentLogin" className="text-black">
              Student
            </Link>
          </a>
          <a className="p-2 text-black " href="#footer">
            About
          </a>
        </div>
        <div className="mr-8 relative flex items-center"></div>
      </div>

      <div className="container mx-auto p-6 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Our Events
            </h1>
            <p className="text-gray-600 text-lg">
              Addis Ababa University is a national university located in Addis
              Ababa, Ethiopia. It is the oldest university in Ethiopia. AAU has
              thirteen campuses. Twelve of these are situated in Addis Ababa
            </p>
            <div></div>
            <Link to="/UserRegistration">
              <div className=" inline-flex items-center px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg shadow-md transition duration-300 ease-in-out mt-10">
                <div>
                  <span className=" flex text-sm font-light ">
                    {" "}
                    Register Now
                  </span>
                </div>
                <div>
                  <svg
                    className="ml-2 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-1/2">
            <img
              src="cover1.jpg"
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <footer id="footer" className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Address: Addis Ababa University 6 killo</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-blue-400 hover:underline"
                >
                  #############
                </a>
              </p>
              <p>Phone: #############</p>
            </div>

            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="/about" className="text-blue-400 hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/services" className="text-blue-400 hover:underline">
                    Services
                  </a>
                </li>

                <li>
                  <a href="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Adddis Ababa University. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
