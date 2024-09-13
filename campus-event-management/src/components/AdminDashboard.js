import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUsers,
  FaClipboardList,
  FaUserAlt,
  FaKey,
  FaCalendarAlt,
} from "react-icons/fa";
import EventTable from "./EventTable";
import UserTable from "./UserTable";
import NotificationBell from "./NotificationBell";

const AdminDashboard = () => {
  const [showEventTable, setShowEventTable] = useState(false);
  const [showAnotherDiv, setShowAnotherDiv] = useState(true);
  const [showUserTable, setShowUserTable] = useState(false);

  const toggleEventTable = () => {
    setShowEventTable(!showEventTable);
    setShowAnotherDiv(false);
    setShowUserTable(false);
  };
  const toggleAnotherDiv = () => {
    setShowAnotherDiv(!showAnotherDiv);
    setShowEventTable(false);
    setShowUserTable(false);
  };
  const toggleUserTable = () => {
    setShowUserTable(!showUserTable);
    setShowEventTable(false);
    setShowAnotherDiv(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-900 text-white  flex-col hidden md:block">
        <div className="flex items-center p-5 border-b border-gray-700">
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold">
              A
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-semibold">Admin</h2>
            </div>
            <div className="relative ">
              <div
                onClick={handleToggle}
                className="cursor-pointer text-sm shadow-sm   "
              >
                <svg
                  className="ml-2 -mr-1 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {isOpen && (
                <div
                  className="absolute z-10 mt-2 w-48 rounded-md shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1 rounded-md bg-white shadow-lg">
                    <a
                      href="/AdminLogin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <nav className="flex flex-col mt-4">
            <a
              className="flex items-center p-4 hover:bg-gray-700"
              onClick={toggleAnotherDiv}
            >
              <Link className="flex items-center" to="/AdminDashboard">
                <FaClipboardList className="mr-3" />
                Dashboard
              </Link>
            </a>
            <a className="flex items-center p-4 hover:bg-gray-700">
              <Link
                onClick={toggleEventTable}
                className="flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-3" />
                Events
              </Link>
            </a>

            <a
              className="flex items-center p-4 hover:bg-gray-700"
              onClick={toggleUserTable}
            >
              <FaUserAlt className="mr-3" />
              Users
            </a>
            <a className="flex items-center p-4 hover:bg-gray-700">
              <Link className="flex items-center" to="/ChangePassword">
                <FaKey className="mr-3" />
                Change Pssword
              </Link>
            </a>
          </nav>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center bg-red-600 text-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold">
            Event Registration and Management
          </h1>
          <div className="flex justify-end">
            <NotificationBell />
          </div>
        </header>
        {showAnotherDiv && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Dashbord</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                <div className="w-16 h-16 bg-blue-200 flex items-center justify-center rounded-full text-blue-600">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Total Registrars</h3>
                  <p className="text-2xl font-bold">0</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
                <div className="w-16 h-16 bg-blue-200 flex items-center justify-center rounded-full text-blue-600">
                  <FaClipboardList className="text-3xl" />
                </div>
                <div className="ml-4">
                  <Link to="/EventManagement">
                    <h3 className="text-lg font-semibold">Events</h3>
                    <p className="text-2xl font-bold">0</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {showEventTable && <EventTable />}
        {showUserTable && <UserTable />}
      </div>
    </div>
  );
};

export default AdminDashboard;
