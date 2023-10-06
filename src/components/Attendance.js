import React, { useState } from 'react';

const Attendance = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [attendanceList, setAttendanceList] = useState([]);

  const handleStartWork = () => {
    setStartTime(new Date().toLocaleTimeString());
    setEndTime(null);
  };

  const handleEndWork = () => {
    setEndTime(new Date().toLocaleTimeString());
    setAttendanceList([...attendanceList, { start: startTime, end: new Date().toLocaleTimeString() }]);
    setStartTime(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Attendance App</h1>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-2xl font-medium">Current Time:</p>
            <p className="text-xl">{new Date().toLocaleTimeString()}</p>
          </div>
          <div>
            <button
              onClick={handleStartWork}
              disabled={startTime !== null}
              className={`${
                startTime === null ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
              } text-white py-2 px-4 rounded-md`}
            >
              Start Work
            </button>
            <button
              onClick={handleEndWork}
              disabled={startTime === null || endTime !== null}
              className={`${
                endTime === null ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'
              } text-white py-2 px-4 rounded-md ml-4`}
            >
              End Work
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Start Time</th>
                <th className="px-4 py-2">End Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((attendance, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{attendance.start}</td>
                  <td className="border px-4 py-2">{attendance.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;