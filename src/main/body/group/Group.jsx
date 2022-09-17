import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSSGroup.css";

function Group() {
  return (
    <div className="main-body">
      <h4>꿈과 희망이 넘치는 1003호</h4>
      <div className='card-body'>
        <div className='card-group'>
        <Card id="card-group1">
          <Card.Header as="h6">그룹원</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>

        <div className='card-group'>
        <Card id="card-group2">
          <Card.Header as="h6">캘린더</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default Group;
