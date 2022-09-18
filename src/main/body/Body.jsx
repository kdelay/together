import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSSBody.css";
import BodyCalendar from "./calendar/BodyCalendar";
import Form from 'react-bootstrap/Form';
// import BodyGroup from './group/BodyGroup';

function Group() {
  return (
    <div className="main-body">
      <h4>꿈과 희망이 넘치는 1003호</h4>
      <div className="card-body">
        <Card id="card-group1">
          <Card.Header as="h6">그룹원<button>이동</button></Card.Header>
          <Card.Body>
            {/* <BodyGroup/>             */}
          </Card.Body>
        </Card>

        <Card id="card-group2">
          <Card.Header as="h6">캘린더<button>이동</button></Card.Header>
          <Card.Body>
            <Card.Text>
              <BodyCalendar />
            </Card.Text>

            <Card id="card-group2-1">
              <Card.Header as="h6">오늘의 일정<button>이동</button></Card.Header>
              <Card.Body>
                <Card.Title>09월 19일</Card.Title>
                <Card.Text>

                <Form.Check.Input isValid />
                  <h6>점심 먹기 - 파스타</h6>
                <Form.Control.Feedback type="valid">
                  김지연, 이수빈
                </Form.Control.Feedback>

                <Form.Check.Input isValid />
                  <h6>카페 - 빽다방</h6>
                <Form.Control.Feedback type="valid">
                  김지연, 이수빈, 한은진
                </Form.Control.Feedback>

                <Form.Check.Input isValid />
                  <h6>저녁 먹기 - 고기</h6>
                <Form.Control.Feedback type="valid">
                  김지연, 이수빈
                </Form.Control.Feedback>

                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Card id="card-group3">
          <Card.Header as="h6">미션<button>이동</button></Card.Header>
          <Card.Body>
            
          </Card.Body>
        </Card>
      </div>

      <div className="card-body2">
        <Card id="card-group4">
          <Card.Header as="h6">오늘의 미션<button>이동</button></Card.Header>
          <Card.Body>
            </Card.Body>
        </Card>

        <Card id="card-group5">
          <Card.Header as="h6">달성 뱃지<button>이동</button></Card.Header>
          <Card.Body>
          </Card.Body>
        </Card>

        <Card id="card-group6">
          <Card.Header as="h6">갤러리<button>이동</button></Card.Header>
          <Card.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Group;
