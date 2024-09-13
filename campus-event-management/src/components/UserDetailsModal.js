import React from "react";
import ReactDOM from "react-dom";

const UserDetailsModal = ({ isOpen, user, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white border rounded shadow-lg p-4 w-80">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        {user && (
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Contact:</strong> {user.contact}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Status:</strong> {user.status}
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default UserDetailsModal;
