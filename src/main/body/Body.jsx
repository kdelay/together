import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSSBody.css";
import BodyCalendar from "./calendar/BodyCalendar";
import Badge1 from "../img/badge1.png";
import Badge2 from "../img/badge2.png";
import Badge3 from "../img/badge3.png";
import Badge4 from "../img/badge4.png";
import Badge5 from "../img/badge5.png";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

function Body() {
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;

  const [calendarList, setCalendarList] = useState([]);
  const [missionList, setMissionList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [click] = useState(true);
  const saveDate = [];

  // get 방식
  useEffect(() => {
    async function calendarList() {
      await Axios.get("/api/calendarList").then((response) => {
        setCalendarList(response.data);
      });
    }

    async function missionList() {
      await Axios.get("/api/missionList").then((response) => {
        console.log(response.data);
        setMissionList(response.data);
      });
    }

    async function galleryList() {
      await Axios.get("/api/galleryList").then((response) => {
        console.log(response.data);
        setGalleryList(response.data);
      });
    }
    calendarList();
    missionList();
    galleryList();
  }, [click]);

  const DataOverlapDel = (date, title) => {
    if (saveDate.some((v) => v === date)) {
      return (
        <ul>
          <li>{title}</li>
        </ul>
      );
    } else {
      saveDate.push(date);
      return (
        <div>
          <ul>
            <div style={{ backgroundColor: "lightgray", width: "100px" }}>
              {date}
            </div>
            <li>{title}</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="main-body">
      <h4>투게더, 함께하는 즐거움</h4>
      <div className="card-body">
        {/* ------------- 뱃지 종류------------- */}
        <Card id="card-group5">
          <Card.Header>뱃지 종류</Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header>미션의 첫 발걸음</Card.Header>
              <div style={{ padding: "30px" }}>
                <img src={Badge1} width="100" height="100" alt="" />
                <img src={Badge2} width="100" height="100" alt="" />
                <img src={Badge3} width="100" height="100" alt="" />
              </div>
              <div style={{ padding: "30px" }}>
                <img src={Badge4} width="100" height="100" alt="" />
                <img src={Badge5} width="100" height="100" alt="" />
              </div>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 캘린더 ------------- */}
        <Card id="card-group2">
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <Card.Header>
              <h5 style={{ color: "black" }} className="link-header">
                캘린더 <BsArrowRightCircle size="20" color="black" />
              </h5>
            </Card.Header>
          </Link>
          <Card.Body>
            {/* 캘린더 */}
            <BodyCalendar />

            {/* ------------- 전체 일정 ------------- */}
            <Card id="card-group2-1">
              <Card.Header>전체 일정</Card.Header>
              <Card.Body>
                <div style={{ color: "black" }}>
                  <div>
                    {calendarList.map((data) => (
                      <div key={data.id}>
                        {DataOverlapDel(data.calDate, data.calTitle)}
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 오늘의 명언 ------------- */}
        <Card id="card-group3">
          <Card.Header>오늘의 명언</Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header as="h6">{dateString}</Card.Header>
              <span style={{padding:'10px'}}>🌈삶이 있는 한 희망은 있다 - 키케로</span>
            </Card>
          </Card.Body>
        </Card>
      </div>

      <div className="card-body2">
        {/* ------------- 미션 ------------- */}
        <Card id="card-group1">
        <Link to="/mission" style={{ textDecoration: "none" }}>
          <Card.Header>
            <h5 style={{ color: "black" }} className="link-header">
              미션 <BsArrowRightCircle size="20" color="black" />
            </h5>
          </Card.Header>
            </Link>
          <div style={{ padding: "20px" }}>
            {missionList.map((data) => (
              <div key={data.id}>
                <ul>
                  <li>{data.miTitle}</li>
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* ------------- 갤러리 ------------- */}
        <Card id="card-group6">
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <Card.Header>
            <h5 style={{ color: "black" }} className="link-header">
              갤러리 <BsArrowRightCircle size="20" color="black" />
            </h5>
          </Card.Header>
          </Link>
          <div>
            {galleryList.map((data) => (
              <span key={data.fileUniqueName}>
                <img
                  style={{width:'200px', height:'200px', padding:'10px', border:'solid 2px black'}}
                  src={`http://localhost:80/api/galleryListGet/${data.fileUniqueName}.jpg`}
                  alt=""
                />
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Body;
