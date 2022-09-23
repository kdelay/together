import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSSBody.css";
import BodyCalendar from "./calendar/BodyCalendar";
import Form from "react-bootstrap/Form";
import Badge1 from '../img/badge1.png'
import { Link } from 'react-router-dom';
import {BsArrowRightCircle} from "react-icons/bs"

function Group() {
  var today = new Date();

  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;

  return (
    <div className="main-body">
      <h4>꿈과 희망이 넘치는 1003호</h4>
      <div className="card-body">
        {/* ------------- 달성 뱃지 ------------- */}
        <Card id="card-group5">
          <Card.Header as="h6">
            달성 뱃지
          </Card.Header>
          <Card.Body>
            <Card id="card-group5-1">
              <Card.Header as="h6">미션의 첫 발걸음</Card.Header>
              <Card.Body>

                <div>
                  <img src={Badge1} width='100' height='100' alt='' />
                </div>
                <p>미션 등록</p>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>


        {/* ------------- 캘린더 ------------- */}
        <Card id="card-group2">
        <Link to='/calendar' style={{ textDecoration: 'none' }}>
          <Card.Header as="h6" >
            <h5 style={{color:'black'}} className='link-header'>캘린더 <BsArrowRightCircle size='20' color='black'/></h5>
            
          </Card.Header>
            </Link>
          <Card.Body>
            <Card.Text>
              <BodyCalendar />
            </Card.Text>

            {/* ------------- 오늘의 일정 ------------- */}
            <Card id="card-group2-1">
              <Card.Header as="h6">
                오늘의 일정
              </Card.Header>
              <Card.Body>
                <Card.Title>{dateString}</Card.Title>
                <Card.Text>
                  <Form.Check.Input isValid />
                  <span>점심 먹기 - 파스타</span>
                  <Form.Control.Feedback type="valid">
                    김지연, 이수빈
                  </Form.Control.Feedback>

                  <p></p>

                  <Form.Check.Input isValid />
                  <span>카페 - 빽다방</span>
                  <Form.Control.Feedback type="valid">
                    김지연, 이수빈, 한은진
                  </Form.Control.Feedback>

                  <p></p>

                  <Form.Check.Input isValid />
                  <span>저녁 먹기 - 고기</span>
                  <Form.Control.Feedback type="valid">
                    김지연, 이수빈
                  </Form.Control.Feedback>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* ------------- 오늘의 미션 ------------- */}
        <Card id="card-group3">
          <Card.Header as="h6">
            오늘의 미션
          </Card.Header>
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
          <h5 style={{color:'black'}} className='link-header'>미션 <BsArrowRightCircle size='20' color='black'/></h5>
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
          <h5 style={{color:'black'}} className='link-header'>갤러리 <BsArrowRightCircle size='20' color='black'/></h5>
          </Card.Header>
          <Card.Body>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              className='img-fluid rounded'
              alt='example'
            />
            <img
              src='https://mdbootstrap.com/img/new/standard/city/043.webp'
              className='img-fluid hover-shadow'
              alt=''
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Group;
