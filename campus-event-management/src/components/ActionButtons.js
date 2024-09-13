import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetailModal from "./EventDetailModal";

function ActionButtons() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    cover: "",
    date_of_event: "",
    time_of_event: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
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
    <div className="flex space-x-2">
      <Link to={`/UpdateEvent/${event.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          <i className="fa fa-edit"></i>
        </button>
      </Link>
      <button
        onClick={() => handleViewDetails()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
      >
        <i className="fa fa-eye"></i>
      </button>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
        <i className="fa fa-trash"></i>
      </button>
      <EventDetailModal
        isOpen={modalOpen}
        user={selectedUser}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ActionButtons;
