import React, { useState, useEffect } from "react";
import Axios from "axios";

const CalendarBody = () => {
  const [calendarList, setCalendarList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState('');
  const [click, setClick] = useState(true);
  const saveDate = [];

  // const [day, setDate] = useState(new Date());

  useEffect(() => {
    async function calendarList() {
      await Axios.get("/api/calendarList").then((response) => {
        setCalendarList(response.data);
      });
    }
    calendarList();
  }, [click]);

  const DataOverlapDel = (date, title, content) => {
    if (saveDate.some((v) => v === date)) {
      console.log("입력중");
      return (
        <div className='flex'>
          <div>제목 : {title}</div>
          <div>내용 : {content}</div>
        </div>
      );
    } else {
      saveDate.push(date);
      return (
        <div className='flex'>
          {date}
          <div>제목 : {title}</div>
          <div>내용 : {content}</div>
        </div>
      );
    }
  };
  const ontext = async (date, title, content) => {
    const result = await Axios.post("/api/calendarList2", {
      calDate: date,
      calTitle: title,
      calContents: content,
    });
    console.log(result);
    alert(result.data);
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }

    setDate("");
    setTitle("");
    setContent("");

  };
  return (
    <div>
      <div className='flex'> 

      <p>날짜</p>
        <input
          type="text"
          className="title"
          value={date}
          onChange={({ target: { value } }) => setDate(value)}
        />
        <p>제목</p>
        <input
          type="text"
          className="title"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <p>내용</p>
        <input
          type="text"
          className="title"
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        />
        <button onClick={(e) => ontext(date, title, content)}>작성</button>
      </div>

      <div className='flex'>
      {calendarList.map((data) => (
        <div key={data.id}>
          {DataOverlapDel(data.calDate, data.calTitle, data.calContents)}
        </div>
      ))}
      </div>

      {/* {calendarList.map((data) => (
        <div key={data.id}>
          {data.calDate}
        </div>
      ))} */}

      {console.log("저장 날짜:" + saveDate)}
    </div>
  );
};

export default CalendarBody;
