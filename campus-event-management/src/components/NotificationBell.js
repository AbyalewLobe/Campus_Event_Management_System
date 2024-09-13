import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "success", message: "New user registered successfully!" },
    { id: 2, type: "warning", message: "Pending event approval needed." },
    { id: 3, type: "error", message: "Event registration failed!" },
    { id: 4, type: "info", message: "You have a new message!" },
    {
      id: 5,
      type: "success",
      message: "Your profile has been updated successfully.",
    },
    {
      id: 6,
      type: "success",
      message: "your Password has been Changed successfully",
    },
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="relative z-10">
      <button
        className="relative text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
        <FaBell className="w-6 h-6 text-white " />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-green-500 rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-4">
            <h4 className="text-lg font-bold text-gray-700">Notifications</h4>
            {notifications.length === 0 ? (
              <p className="text-gray-500">No new notifications</p>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`${
                      notification.type === "success"
                        ? "bg-red-100 border-red-500 text-red-700 shadow-lg"
                        : notification.type === "warning"
                        ? "bg-red-100 border-red-500 text-red-700 shadow-lg"
                        : "bg-red-100 border-red-500 text-red-700 shadow-lg"
                    } border-l-4 p-3 rounded-lg flex justify-between items-center`}
                  >
                    <span>{notification.message}</span>
                    <button
                      className="text-xl font-bold text-gray-600 hover:text-gray-900"
                      onClick={() => handleClose(notification.id)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
