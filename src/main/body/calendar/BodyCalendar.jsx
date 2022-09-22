import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

const BodyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const marks = [
    "15-09-2022",
    "03-09-2022",
    "07-09-2022",
    "12-09-2022",
    "13-09-2022",
  ];

  return (
    <div>
      <Calendar
        // className='highlight'
        onChange={onChange}
        value={value}
        locale="en-EN"
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
      <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </div>
  );
};

export default BodyCalendar;