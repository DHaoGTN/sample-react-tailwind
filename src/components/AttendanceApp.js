// By chatGPT
import React, { useState, useEffect } from 'react';

const AttendanceApp = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  const handleStartWork = () => {
    setStartTime(new Date().toLocaleTimeString());
    setEndTime(null);
  };

  const handleEndWork = () => {
    if (startTime) {
      setEndTime(new Date().toLocaleTimeString());

      const attendanceEntry = {
        startTime,
        endTime: new Date().toLocaleTimeString(),
      };

      setAttendanceHistory([...attendanceHistory, attendanceEntry]);
      setStartTime(null);
      setEndTime(null);
    }
  };


  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Attendance App</h1>
        <p className="text-gray-600">Current Time: {startTime}</p>
      </div>
      <div className="my-8">
        <button
          onClick={handleStartWork}
          disabled={endTime === '' ? false : true}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-4"
        >
          Start Work
        </button>
        <button
          onClick={handleEndWork}
          disabled={startTime === '' ? true : false}
          className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md"
        >
          End Work
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Attendance History</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-left">Start Time</th>
              <th className="py-2 px-4 bg-gray-200 text-left">End Time</th>
            </tr>
          </thead>
          <tbody>
            {attendanceHistory.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4">{entry.startTime}</td>
                <td className="py-2 px-4">{entry.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceApp;
