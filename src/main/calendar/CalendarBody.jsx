import React, { useState, useEffect } from "react";
import Axios from "axios";

const CalendarBody = () => {
  const [calendarlist, setCalendarList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("2022-09-21");
  const [click, setClick] = useState(true);
  const abc = [];

  useEffect(() => {
    async function calendarlist() {
      await Axios.get("/api/calendarlist").then((response) => {
        setCalendarList(response.data);
      });
    }
    calendarlist();
  }, [click]);

  const DataOverlapDel = (date, title, content) => {
    if (abc.some((v) => v === date)) {
      console.log("안너짐");
      return (
        <div>
          <div>제목 : {title}</div>
          <div>내용 : {content}</div>
        </div>
      );
    } else {
      abc.push(date);
      return (
        <div>
          {date}
          <div>제목 : {title}</div>
          <div>내용 : {content}</div>
        </div>
      );
    }
  };
  const ontext = async (date, title, content) => {
    const result = await Axios.post("/api/calendarlist2", {
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

    setTitle("");
    setContent("");
  };
  return (
    <div>
      <div>
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

      {calendarlist.map((data) => (
        <div key={data.id}>
          {DataOverlapDel(data.calDate, data.calTitle, data.calContents)}
        </div>
      ))}

      {console.log("abc:" + abc)}
    </div>
  );
};

export default CalendarBody;
