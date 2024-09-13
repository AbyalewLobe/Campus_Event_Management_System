import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventManagement = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    cover: "",
    date_of_event: "",
    time_of_event: "",
  });

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/eventlist");
        console.log(res.data);
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/eventlist/${id}`);
      window.alert("Event Delated Succesfully");
      setEvents(events.filter((event) => event.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Events List</h1>

        <div className="flex flex-wrap -m-4 mx-auto justify-center">
          {events.map((event) => (
            <div key={event.id} className="p-4  sm:w-1/2 lg:w-1/4 flex">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  src="/aau1.jpeg"
                  alt="Event Image"
                  className="lg:h-48 md:h-24 w-full object-cover object-center"
                />
                <div className="flex-1 p-6 hover:bg-indigo-700 hover:text-white transition duration-300">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold mb-3 text-indigo-300">
                      {event.title}
                    </h1>
                    <p className=" leading-relaxed mb-3 ">
                      {event.description}
                    </p>
                    <p className=" leading-relaxed mb-3 ">
                      {event.date_of_event}
                    </p>
                    <p className=" leading-relaxed mb-3 ">
                      {event.time_of_event}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex justify-between flex-row gap-5 items-center">
                      <button
                        className=" bg-red-400 rounded-lg p-2 text-sm font-light"
                        onClick={() => handleDelete(event.id)}
                      >
                        Delate
                      </button>
                      <button className="bg-blue-400 rounded-lg p-2 text-sm font-light">
                        <Link to={`/UpdateEvent/${event.id}`}>Update</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventManagement;
