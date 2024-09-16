import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    cover: "",
    date_of_event: "",
    time_of_event: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const EventId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/eventlist/${EventId}`
        );
        setEvent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvent();
  }, [EventId]);

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/eventlist/${EventId}`, event);
      window.alert("Event Update Successfully");
      navigate("/EventManagement");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen  bg-gray-300">
      <h1 className="text-lg font-bold uppercase ">Update Event</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={event.title}
        onChange={handleChange}
        className="w-80 p-2 border border-gray-400 rounded-md"
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={event.description}
        onChange={handleChange}
        className="w-80 p-2 border border-gray-400 rounded-md"
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        value={event.cover}
        onChange={handleChange}
        className="w-80 p-2 border border-gray-400 rounded-md"
      />
      <input
        className="w-80 p-2 border border-gray-400 rounded-md"
        type="date"
        value={event.date_of_event}
        onChange={handleChange}
        name="date_of_event"
        required
      />

      <input
        className="w-80 p-2 border border-gray-400 rounded-md"
        type="time"
        value={event.time_of_event}
        onChange={handleChange}
        name="time_of_event"
        required
      />
      <button
        className="border bg-red-600 rounded-lg p-2 text-sm font-semibold"
        onClick={handleClick}
      >
        Update Event
      </button>
    </div>
  );
};

export default UpdateEvent;
