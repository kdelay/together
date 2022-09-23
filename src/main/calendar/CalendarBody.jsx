import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Calendar.css";
import Calendar from "../body/calendar/BodyCalendar";

const CalendarBody = () => {
  const [calendarList, setCalendarList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [click, setClick] = useState(true);
  const saveDate = [];


  // get 방식
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
        <div>
            <div>제목 : {title}</div>
            <div>내용 : {content}</div>
            <hr className='design1'/>
        </div>
      );
    } else {
      saveDate.push(date);
      return (
        <div>
          <div className="box">
            <div className='date'>{date}</div>
            
            <div>제목 : {title}</div>
            <div>내용 : {content}</div>
            <hr className='design1'/>
          </div>
        </div>
      );
    }
  };
  // post 방식
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

    // 값 전송하고 나면 빈 상태로 바꾸기
    setDate("");
    setTitle("");
    setContent("");
  };
  return (
    // 날짜, 제목, 내용 입력
    <div className='flex'>
      
      <div>
      <Calendar/>
      <div style={{marginLeft:'200px', marginTop:'50px'}}>
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
      </div>

      <div style={{marginLeft:'100px'}}>
        {calendarList.map((data) => (
          <div key={data.id}>
            {/* <div className='box'> */}
            {DataOverlapDel(data.calDate, data.calTitle, data.calContents)}
            {/* </div> */}
          </div>
        ))}
      </div>

      {console.log("저장 날짜:" + saveDate)}
    </div>
  );
};

export default CalendarBody;
