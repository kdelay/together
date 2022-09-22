import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import moment from "moment";

const BodyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const marks = [
    // "21-09-2022",
  ];

  return (
    <div>
      <Calendar
        // className='highlight'
        onChange={onChange}
        value={value}
        locale="en-EN"
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
      />
      <div className="text-gray-500 mt-4 margin-left">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </div>
  );
};

export default BodyCalendar;