import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSSBody.css";
import BodyCalendar from "./calendar/BodyCalendar";
import Form from "react-bootstrap/Form";
import Badge1 from "../img/badge1.png";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

function Body() {
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;
  // const [value, onChange] = useState(new Date());

  const [calendarList, setCalendarList] = useState([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [date, setDate] = useState("");
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

  

  const DataOverlapDel = (date, title) => {
    if( saveDate.some((v) => v === date) ) {
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
            <div style={{backgroundColor: 'lightgray', width: '100px'}}>{date}</div>
            <li>{title}</li>
          </ul>
        </div>
      );
      }
  }

  return (
    <div className="main-body">
      <h4>꿈과 희망이 넘치는 1003호</h4>
      <div className="card-body">
        {/* ------------- 달성 뱃지 ------------- */}
        <Card id="card-group5">
          <Card.Header>달성 뱃지</Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header>미션의 첫 발걸음</Card.Header>
              <Card.Body>
                <div>
                  <img src={Badge1} width="100" height="100" alt="" />
                </div>
                <h6>미션 등록</h6>
              </Card.Body>
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
                  <div style={{color:'black'}}>
                    <div>
                      {calendarList.map((data) => (
                        <div key={data.id}>
                          {DataOverlapDel(
                            data.calDate,
                            data.calTitle
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 오늘의 미션 ------------- */}
        <Card id="card-group3">
          <Card.Header>오늘의 미션</Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header as="h6">{dateString}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form.Check.Input isValid />
                  <span>미션 등록하기</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>

      <div className="card-body2">
        {/* ------------- 미션 ------------- */}
        <Card id="card-group1">
          <Card.Header>
            <h5 style={{ color: "black" }} className="link-header">
              미션 <BsArrowRightCircle size="20" color="black" />
            </h5>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Check.Input isValid />
              <span>9월 1번 만나기</span>
              <Form.Check.Input isValid />
              <span>9월 2번 만나기</span>
              <Form.Check.Input isValid />
              <span>9월 3번 만나기</span>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ------------- 갤러리 ------------- */}
        <Card id="card-group6">
          <Card.Header>
            <h5 style={{ color: "black" }} className="link-header">
              갤러리 <BsArrowRightCircle size="20" color="black" />
            </h5>
          </Card.Header>
          <Card.Body>
            <img
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              className="img-fluid rounded"
              alt="example"
            />
            <img
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              className="img-fluid hover-shadow"
              alt=""
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Body;
