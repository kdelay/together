import React, { useState } from "react";
import styles from "./Header.module.css";
import { BsPersonCircle } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">마이페이지</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>계정</h4>
        <p>
          <div>
            <InputGroup className="mb-3">
              <h5 style={{marginTop:'5px', marginRight:'10px'}}>이름</h5>
              <Form.Control/>
              <Button variant="outline-secondary" id="button-addon2">
                변경
              </Button>
            </InputGroup>
          </div>

          <div>
            <InputGroup className="mb-3">
              <h5 style={{marginTop:'5px', marginRight:'10px'}}>닉네임</h5>
              <Form.Control/>
              <Button variant="outline-secondary" id="button-addon2">
                변경
              </Button>
            </InputGroup>
          </div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Header = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img
          alt="logo"
          className={styles.logo}
          src={require("../img/togetherLogo.png")}
        />

        <h2 className={styles.textLogo}>Together</h2>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <BsPersonCircle
                onClick={() => setModalShow(true)}
                size="45"
                style={{ marginTop: "20px" }}
              />
            </li>
          </ul>
        </nav>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </header>
  );
};

export default Header;
