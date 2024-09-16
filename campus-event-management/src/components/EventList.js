import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/eventlist");
        console.log("Fetched events:", res.data);
        if (Array.isArray(res.data)) {
          setEvents(res.data);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="md:h-full flex items-center text-gray-600   overflow-y-auto ">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-start mb-12 flex justify-between">
          <h5 className="text-normal text-xl md:text-2xl uppercase text-indigo-700 mb-1">
            See Our Events
          </h5>

          <div>
            <div>
              <input
                type="text"
                placeholder="Search.."
                className="px-4 rounded-full focus:outline-none w-full border border-gray-500 p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex-wrap -m-4 mx-auto flex justify-center">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={event.id}
                className="p-4 sm:w-1/2 sm:justify-center lg:w-2/4"
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src="/aau3.png"
                    alt="event"
                    className="lg:h-72 md:h-48 w-full object-cover object-center"
                  />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300">
                    <h2 className="text-base font-medium text-indigo-300 m-1">
                      October
                    </h2>
                    <h1 className="text-2xl font-semibold mb-3">
                      {event.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Description: {event.description}
                    </p>
                    <div className="flex items-center justify-between flex-wrap bg-red-500 p-2 rounded-lg">
                      <a
                        href="#"
                        className="text-indigo-900 hover:text-white inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        <Link to="/RegisterForEvent">Register Now</Link>
                      </a>
                      <p className="text-white "> > </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventList;
