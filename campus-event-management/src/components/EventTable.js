import React from "react";
import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";

function EventTable() {
  return (
    <div className="flex flex-col p-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Event List</h2>
        <Link to="/AddNewEvent">
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            + Add New
          </button>
        </Link>
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Schedule
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Event
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Nov 16, 2020 08:00 AM
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Sample Event 1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-gray-300 text-gray-600 py-1 px-3 rounded">
                  Close
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ActionButtons />
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Nov 14, 2020 12:00 PM
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Sample Event 2</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-blue-500 text-white py-1 px-3 rounded">
                  Open
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ActionButtons />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventTable;
