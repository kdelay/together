import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import TogetherLogo from "../img/togetherLogo.png";
import "./TogetherMain.css"

function TogetherMain() {
  return (
    <>
      <Container id="top-navbar--wrap">
        <Navbar bg="light">
            <Navbar.Brand href="#home" className="top-navbar__brand">
              <img
                alt=""
                src={TogetherLogo}
                width="20%"
                height="100%"
                className="top-navbar__logo"
              />{" "}
              Together
            </Navbar.Brand>
        </Navbar>
      </Container>
    </>
  );
  // header
  // <header class="p-3 mb-3 border-bottom">
  //     <div class="container">
  //         <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
  //             <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">

  //                 <img width="250" height="60" src="img/horizontal_logo.png"></img>
  //             </a>

  //             <ul class="nav me-lg-auto"></ul>

  //             <div class="dropdown text-end">
  //                 <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle"
  //                     data-bs-toggle="dropdown" aria-expanded="false">
  //                     <img src="img/alarm.png" alt="mdo" width="32" height="32" class="rounded-circle">
  //                 </a>
  //                 <ul class="dropdown-menu text-small">
  //                     <li><a class="dropdown-item" href="#">프로필 수정</a></li>
  //                     <li><a class="dropdown-item" href="#">설정</a></li>
  //                 </ul>
  //             </div>

  //             <div class="dropdown text-end">
  //                 <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle"
  //                     data-bs-toggle="dropdown" aria-expanded="false">
  //                     <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
  //                         class="rounded-circle">
  //                 </a>
  //                 <ul class="dropdown-menu text-small">
  //                     <li><a class="dropdown-item" href="#">프로필 수정</a></li>
  //                     <li><a class="dropdown-item" href="#">설정</a></li>
  //                     <li>
  //                         <hr class="dropdown-divider">
  //                     </li>
  //                     <li><a class="dropdown-item" href="#">로그아웃</a></li>
  //                 </ul>
  //             </div>
  //         </div>
  //     </div>
  // </header>
}

export default TogetherMain;
