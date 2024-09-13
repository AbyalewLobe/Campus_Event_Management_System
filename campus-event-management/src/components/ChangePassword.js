import React, { useState } from "react";
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = () => {
    alert("Password changed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center ">
      <div className="max-w-md mx-auto mt-10  border border-gray-200 rounded-lg shadow-lg p-24 w-full  bg-white  ">
        <h1 className="text-2xl font-bold mb-8 ">Change Password</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2"
            htmlFor="current-password"
          >
            Current Password:
          </label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="new-password">
            New Password:
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="w-full px-4 py-2 bg-red-500 hover:bg-blue-600 mt-6 text-white rounded"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
