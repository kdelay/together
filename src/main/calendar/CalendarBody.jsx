import React, { useState, useEffect } from "react";
import Axios from "axios";

const CalendarBody = () => {
    const [calendarList, setCalendarList] = useState([])
    const overlapRemove = [];

    useEffect(() => {
        async function calendarList() {
            await Axios.get("/api/calendarList").then((response) => {
                setCalendarList(response.data)
            })
        }
        calendarList();

    }, []);

    const DataOverlapDel = (date, title, contents) => {
        if (overlapRemove.some(v => v === date)) {
            return (
                <div>
                    <div>제목 : {title}</div>
                    <div>내용 : {contents}</div>
                </div>
            )
        } else {
            overlapRemove.push(date)
            return (
                <div>
                    {date}
                    <div>제목 : {title}</div>
                    <div>내용 : {contents}</div>
                </div>
            )
        }

    }

    return (
        <div>
            {
                calendarList.map((data) => (
                    <div key={data.id}>
                        {
                            DataOverlapDel(data.calDate, data.calTitle, data.calContents)

                        }
                    </div>
                ))
            }

            {console.log('중복 제거:' + overlapRemove)}
        </div>
    )
}


export default CalendarBody;