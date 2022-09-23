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

function Group() {
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;
  const [value, onChange] = useState(new Date());

  const [calendarList, setCalendarList] = useState([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [date, setDate] = useState("");
  const [click, setClick] = useState(true);
  // const saveDate = [];

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
    if ({ date } === {dateString}) {
        return (
          <div>
            {/* <div className="box"> */}
              <div className="date">{date}</div>
              <div>제목 : {title}</div>
              <div>내용 : {content}</div>
              <hr className="design1" />
            {/* </div> */}
          </div>
        );
      }
    };

  return (
    <div className="main-body">
      <h4>꿈과 희망이 넘치는 1003호</h4>
      <div className="card-body">
        {/* ------------- 달성 뱃지 ------------- */}
        <Card id="card-group5">
          <Card.Header as="h6">달성 뱃지</Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header as="h6">미션의 첫 발걸음</Card.Header>
              <Card.Body>
                <div>
                  <img src={Badge1} width="100" height="100" alt="" />
                </div>
                <p>미션 등록</p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 캘린더 ------------- */}
        <Card id="card-group2">
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <Card.Header as="h6">
              <h5 style={{ color: "black" }} className="link-header">
                캘린더 <BsArrowRightCircle size="20" color="black" />
              </h5>
            </Card.Header>
          </Link>
          <Card.Body>
            <Card.Text>
              <BodyCalendar />
            </Card.Text>

            {/* ------------- 오늘의 일정 ------------- */}
            <Card id="card-group2-1">
              <Card.Header as="h6">오늘의 일정</Card.Header>
              <Card.Body>
                {/* <Card.Title>{dateString}</Card.Title> */}
                <Card.Text>
                  {dateString}
                  <div>
                    {calendarList.map((data) => (
                      <div key={data.id}>
                        {DataOverlapDel(
                          data.calDate,
                          data.calTitle,
                          data.calContents
                        )}
                      </div>
                    ))}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 오늘의 미션 ------------- */}
        <Card id="card-group3">
          <Card.Header as="h6">오늘의 미션</Card.Header>
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
          <Card.Header as="h6">
            <h5 style={{ color: "black" }} className="link-header">
              미션 <BsArrowRightCircle size="20" color="black" />
            </h5>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Check.Input isValid />
              <span>9월 1번 만나기</span>
              <p></p>
              <Form.Check.Input isValid />
              <span>9월 2번 만나기</span>
              <p></p>
              <Form.Check.Input isValid />
              <span>9월 3번 만나기</span>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ------------- 갤러리 ------------- */}
        <Card id="card-group6">
          <Card.Header as="h6">
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

export default Group;
