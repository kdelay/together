import React from "react";
import Logo from "../img/togetherLogo.png";
import "../css/CSSFirstPage.css";
import { Link } from "react-router-dom";

const LogoutPage = () => {
  return (
    <div>
      <div className="form-first">
        <img src={Logo} alt="" className="img-logo" />
        <h2 className="btn-center">투게더, 함께하는 즐거움</h2>

        <div className="btn-bundle">
          <Link to="/login">
            <div className="btn-center">
              <button className="btn-login">로그인</button>
            </div>
          </Link>

          <Link to="/register">
            <div className="btn-center">
              <button className="btn-register">회원가입</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
