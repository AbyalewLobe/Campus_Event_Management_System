import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddNewEvent() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    cover: "",
    date_of_event: "",
    time_of_event: "",
  });

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/eventlist", event);
      // Add the new event to the top of the events list
      setEvents([res.data, ...events]);
      window.alert("Event Add Sucssesfully");
      // Clear the form
      setEvent({
        title: "",
        description: "",
        cover: "",
        date_of_event: "",
        time_of_event: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <diiv className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold text-center mb-4">
          Add New Event
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-4 ">
            <input
              className="w-80 p-2 border border-gray-400 rounded-md "
              type="text"
              placeholder="Title"
              value={event.title}
              onChange={handleChange}
              name="title"
            />
            <input
              className="w-80 p-2 border border-gray-400 rounded-md"
              type="text"
              placeholder="Description"
              value={event.description}
              onChange={handleChange}
              name="description"
            />
            <input
              className="w-80 p-2 border border-gray-400 rounded-md"
              type="file"
              placeholder="Cover"
              value={event.cover}
              onChange={handleChange}
              name="cover"
            />

            <input
              className="w-80 p-2 border border-gray-400 rounded-md"
              type="date"
              id="eventDate"
              value={event.date_of_event}
              onChange={handleChange}
              name="date_of_event"
              required
            />

            <input
              className="w-80 p-2 border border-gray-400 rounded-md"
              type="time"
              id="eventTime"
              value={event.time_of_event}
              onChange={handleChange}
              name="time_of_event"
              required
            />

            <button
              onClick={handleClick}
              className="p-2 border bg-blue-400 rounded-lg text-sm font-semibold"
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </diiv>
  );
}

export default AddNewEvent;
