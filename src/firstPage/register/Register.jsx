import React from 'react';
import "../css/CSSFirstPage.css";
import Logo from "../img/togetherLogo.png";

const Register = () => {

    // // post 방식
    // const ontext = async(id, pw, name) => {
    //     const result = await Axios.post("/api")
    // }

    return (
        <div className="wrapper">
        <div className="form-container">
          <img src={Logo} alt=""/>  
          <form>
            <h3>회원 가입</h3>
            <p>양식에 맞추어 회원 정보를 입력해주세요.</p>
            <div className="form-group">
              <input type="text" className="form-control" required/>
              <span>아이디 :</span>
              <span className="border"></span>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" required/>
              <span>비밀번호 :</span>
              <span className="border"></span>
            </div>
            <div className="form-group">
              <input className="form-control" required/>
              <span>닉네임 :</span>
              <span className="border"></span>
            </div>
            <button type="submit">신청하기</button>
          </form>
        </div>
      </div>
    );
};

export default Register;