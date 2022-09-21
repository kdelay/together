import React, { usdState, useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';

const CalendarBody = () => {
    const [calendarList, setCalendarList] = useState([])

    useEffect(() => {
        Axios.get("/api/calendarList").then((response) => {
            setCalendarList(response.data);
        })
    }, [])

    return (
        <div>
            <div>
                <h6>2022-09-21</h6>
                {calendarList
                    .filter((x) =>
                        x.calDate === '2022-09-21')
                    .map((x) => (
                        <div key={x.id}>

                            <div>
                                {x.calTitle}
                                |
                                {x.calContents}
                            </div>
                        </div>
                    ))}
            </div>
            <p></p>
            <div>
                <h6>2022-09-22</h6>
                {calendarList
                    .filter((x) =>
                        x.calDate === '2022-09-22')
                    .map((x) => (
                        <div key={x.id}>

                            <div>
                                {x.calTitle}
                                |
                                {x.calContents}
                            </div>
                        </div>
                    ))}
            </div>
            <p></p>
            <div>
                <h6>2022-09-23</h6>
                {calendarList
                    .filter((x) =>
                        x.calDate === '2022-09-23')
                    .map((x) => (
                        <div key={x.id}>

                            <div>
                                {x.calTitle}
                                |
                                {x.calContents}
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    );
};

export default CalendarBody;