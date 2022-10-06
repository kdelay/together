import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/CSSFirstPage.css";
import Logo from "../img/togetherLogo.png";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);

  const [ok, setOk] = useState(false);

  let history = useHistory();

  // get 방식
  useEffect(() => {
    async function userList() {
      await Axios.get("/api/userList").then((response) => {
        setUserList(response.data);
        console.log(response.data);
      });
    }
    userList();
  }, [click]);

  // id (아이디) input 이벤트
  const handleInputId = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  // password (비밀번호) input 이벤트
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  // name (닉네임) input 이벤트
  const handleInputName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  // post 방식
  const ontext = async (id, password, name) => {
    const result = await Axios.post("/api/userList2", {
      id: id,
      password: password,
      name: name
    });
    console.log(result);

  };

  const idCheck = () => {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === id) {
        alert("이미 존재하는 아이디입니다.");
      }
      else {
        setOk(true);
      }
    }
    if(ok === true) {
      alert("등록되었습니다.");
      history.replace("/");
    }
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <img src={Logo} alt="" />
        <form>
          <h3>회원 가입</h3>
          <p>양식에 맞추어 회원 정보를 입력해주세요.</p>
          <div className="form-group">
            <input
              onChange={(e) => handleInputId(e)}
              value={id}
              type="text"
              className="form-control"
              required
            />
            <span>아이디 :</span>
            <span className="border"></span>
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleInputPassword(e)}
              value={password}
              type="text"
              className="form-control"
              required
            />
            <span>비밀번호 :</span>
            <span className="border"></span>
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleInputName(e)}
              value={name}
              className="form-control"
              required
            />
            <span>닉네임 :</span>
            <span className="border"></span>
          </div>
          <button
            type="button"
            onClick={(e) => (ontext(id, password, name), idCheck()
              )}
            className="btn-submit"
          >
            신청하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
