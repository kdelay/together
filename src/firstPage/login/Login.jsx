import React from "react";
import Logo from "../img/logo.png";
import "../css/CSSFirstPage.css";

const login = () => {
  return (
    <div className="form-first">
      <img src={Logo} alt="" />

      <div className="btn-center">
        <div>
          <input type="text" placeholder="아이디" className="input-control" />
        </div>

        <div>
          <input
            type="password"
            placeholder="비밀번호"
            className="input-control"
          />
        </div>

        <div>
          <button type="submit" className="btn-login-1">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
