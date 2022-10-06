import React, {useState, useEffect} from "react";
// import Logo from "../img/togetherLogo.png";
import Logo from "../img/result.gif"
import "../css/CSSFirstPage.css";
import Axios from "axios"
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [click, setClick] = useState(false);

  const [login, setLogin] = useState(0);

  let history = useHistory();

  // get 방식
  useEffect(() => {
      async function user() {
          await Axios.get("/api/userList").then((response) => {
              setUserList(response.data);
              console.log(response);
          });
      }
      user();
  }, [click]);

    // id (아이디) input 이벤트
    const handleInputId = (e) => {
      setId(e.target.value);
      console.log(e.target.value);
  }

  // password (비밀번호) input 이벤트
  const handleInputPassword = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
  }

  const checkLogin = () => {
    console.log(userList);
    for(let i=0; i<userList.length; i++) {
      if(id === userList[i].id && password === userList[i].password) {
        setLogin(0);
        alert("로그인 성공! 환영합니다.");
        history.replace('/main');
      }
      else {
        setLogin(1);
      }
    }
  }

  return (
    <div className="form-first">
      <img src={Logo} alt="" />

      <div className="btn-center">
        <div>
          <input 
            onChange={(e) => handleInputId(e)} 
            value={id} 
            type="text" 
            placeholder="아이디" 
            className="input-control" 
          />
        </div>

        <div>
          <input
            onChange={(e) => handleInputPassword(e)}
            value={password}
            type="password"
            placeholder="비밀번호"
            className="input-control"
          />
        </div>

        <div>
          <button 
            type="button" 
            
            className="btn-login-1" 
            onClick={() => (
              checkLogin()
            )}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
