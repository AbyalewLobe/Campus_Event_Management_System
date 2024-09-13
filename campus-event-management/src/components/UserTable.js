import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetailsModal from "./UserDetailsModal";

const UserTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Abyalew, Admin",
      contact: "+123456789",
      role: "Admin",
      email: "admin@gmail.com",
      active: true,
    },
    {
      id: 2,
      name: "Eliyas, Haylu",
      contact: "+123456789",
      role: "Registrar",
      email: "jsmith@gmail.com",
      active: true,
    },
    {
      id: 3,
      name: "User, User",
      contact: "+123456789",
      role: "Registrar",
      email: "user@gmail.com",
      active: false,
    },
    {
      id: 4,
      name: "Sami, Kebede",
      contact: "+123456789",
      role: "Registrar",
      email: "sami@gmail.com",
      active: true,
    },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
    setDropdownOpen(null);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
    setDropdownOpen(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">User List</h2>
        <button className="bg-red-600 hover:bg-blue-600 text-white px-4 py-2 rounded">
          <Link to="/AdminUserAdd"> Add New User</Link>
        </button>
      </div>
      <div className="mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Contact</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.contact}</td>
                <td className="px-4 py-2 border">{user.role}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td
                  className={`px-4 py-2 border ${
                    user.status === "Active" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {user.status}
                </td>
                <td className="px-4 py-2 border relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="bg-red-600 hover:bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    Action
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute z-10 mt-2 bg-white border rounded shadow-lg w-40">
                      <ul className="text-gray-700">
                        <Link to="/AdminUserUpdate">
                          <li className="hover:bg-gray-200 px-4 py-2">
                            Edit User
                          </li>
                        </Link>

                        <li className="hover:bg-gray-200 px-4 py-2">
                          <button
                            onClick={() => console.log("Delete User", user.id)}
                          >
                            Delete User
                          </button>
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2">
                          <button onClick={() => handleViewDetails(user)}>
                            View Details
                          </button>
                        </li>

                        <li className="hover:bg-gray-200 px-4 py-2">
                          {user.status === "Active" ? (
                            <button
                              onClick={() =>
                                handleStatusChange(user.id, "Inactive")
                              }
                            >
                              Deactivate
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleStatusChange(user.id, "Active")
                              }
                            >
                              Activate
                            </button>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserDetailsModal
        isOpen={modalOpen}
        user={selectedUser}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default UserTable;
