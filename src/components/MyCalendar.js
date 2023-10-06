import React, { useState } from 'react';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isCurrentWeek = (day) => {
    const dateInQuestion = new Date(date.getFullYear(), date.getMonth(), day);
    const startOfWeek = currentDay - new Date().getDay();
    const endOfWeek = startOfWeek + 6;
    return currentYear === date.getFullYear() && currentMonth === date.getMonth() && day >= startOfWeek && day <= endOfWeek;
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <button onClick={handlePrevMonth}>&lt;</button>
          <h2 className="text-xl font-bold">
            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
          </h2>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekdays.map((weekday) => (
            <div key={weekday} className="uppercase font-bold text-gray-500">
              {weekday}
            </div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={index}></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => (
            <div key={index + 1} className={`p-2 rounded-full hover:bg-gray-200 ${isCurrentWeek(index + 1) ? 'bg-green-200' : ''}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;