import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/eventlist");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8800/register", {
        eventId: selectedEventId,
      });
      setMessage("Registration successful");
    } catch (err) {
      console.log(err);
      setMessage("Registration failed");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-600">
      <div className="form flex flex-col p-20 bg-gray-300 shadow-md rounded-md gap-8 ">
        <h1 className="text-3xl font-semibold p-4 ">Register for an Event</h1>

        <select
          value={selectedEventId}
          onChange={(e) => setSelectedEventId(e.target.value)}
          className="border bg-transparent border-gray-700 rounded-lg p-2 text-sm font-light"
        >
          <option value="">Select an Event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </select>
        <button
          className="border bg-blue-600 rounded-lg p-2 text-sm font-semibold "
          onClick={handleRegister}
        >
          Register
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RegisterForEvent;
