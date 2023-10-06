import React from 'react';

const AttendanceHistory = ({ attendanceHistory }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-lg font-bold px-4 py-2 bg-gray-200">Attendance History</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Start Time</th>
            <th className="px-4 py-2 text-left">End Time</th>
            <th className="px-4 py-2 text-left">Duration (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {attendanceHistory.map((record, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{record.startTime}</td>
              <td className="border px-4 py-2">{record.endTime}</td>
              <td className="border px-4 py-2">{record.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;