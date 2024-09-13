import React, { useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.firstName}
                onChange={handleChange}
              />
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.middleName}
                onChange={handleChange}
              />
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.lastName}
                onChange={handleChange}
              />
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Retype password"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
