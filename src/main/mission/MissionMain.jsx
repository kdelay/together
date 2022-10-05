import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import "./CSSMission.css";

const MissionMain = () => {
  const [missionList, setMissionList] = useState([]);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    async function missionList() {
      await Axios.get("/api/missionList").then((response) => {
        setMissionList(response.data);
        console.log(response);
      });
    }
    missionList();
  }, [click]);

  const handleInputTitle = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value);
  }

  const handleInputMember = (e) => {
    setMember(e.target.value);
    console.log(e.target.value);

  }

  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    if(e.target.checked) {
      alert("축하드립니다! 미션 성공!")
    }
    else {
      alert("취소되었습니다.")
    }
  }

  const delButton = (realId) => {
    // console.log(missionList[0].id);
    // console.log(realId);

    if(window.confirm("삭제하시겠습니까?")) {
      for(let i=0; i<missionList.length; i++) {
        if(missionList[i].id === realId) {
          const response = Axios.post(`/api/missionListDel/${realId}`);
          console.log(response);
        }
      }

      alert("삭제되었습니다.");
    }
    else {
      alert("취소되었습니다.");
    }

    
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  // post 방식
  const ontext = async(title, member) => {
    const result = await Axios.post("/api/missionList2", {
      miTitle: title,
      miMember: member,
    });
    console.log(result);
    alert(result.data);

    if(click) {
      setClick(false);
    }
    else{
      setClick(true);
    }

    // 값 전송하고 나면 빈 상태로 바꾸기
    setTitle("");
    setMember("");
  }

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {/* 사이드 바 */}
        <Sidebar />

        {/* 미션 */}
        <div className="white-space">
          <h1>미션</h1>
          <div className="box1">
            <h2 className="m-t-30 m-l-20">
              전체 미션 수 <span className="text-color">{missionList.length}</span>
            </h2>
          </div>

          {/* 미션 추가 */}
          <div className="m-t column">
            <h1>미션 추가하기</h1>
            <input 
              type="text" className="add-box" placeholder="제목" 
              onChange={(e) => handleInputTitle(e)}
              // onChange={({target:{value}}) => setTitle(value)}
              />
            <input 
              type="text" className="add-box" placeholder="참여자" 
              onChange={(e) => handleInputMember(e)}
              // onChange={({target:{value}}) => setMember(value)}
            />
            <button 
              onClick={(e) => ontext(title, member)}
              className="add-btn">
                미션 추가
            </button>
          </div>

          {/* 현재 등록한 미션 */}
          <div className="m-t">
            <h1>현재 등록된 미션</h1>

            {missionList.map((data) => (
              <div key={data.id}>
                <div className="box2 m-b-30">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="m-l-20 m-t-20 checkbox-size"
                      onClick={(e) => handleCheckbox(e)}
                    />
                    <div className="m-t-30 m-l-20">
                      <h4>{data.miTitle}</h4>
                      <h5>{data.miMember}</h5>
                    </div>
                    <h5 className="check">미완료</h5>
                    <button onClick={(() => delButton(data.id))}
                      className="del-btn">삭제</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ------ 뱃지 ------ */}
        <div className="white-space">
          <div>
            <h1>달성 뱃지</h1>
            <div className="box3">
              <div className="flex">
                <img
                  className="badge-size"
                  src={require("../img/no-badge1.png")}
                  alt=""
                />
                <div className="m-t-30">
                  <h3>첫번째 뱃지</h3>
                  <h4>
                    미션을 <span className="text-color">1개</span> 완료하세요.
                  </h4>
                </div>
              </div>
            </div>

            <div className="box3 m-t-30">
              <div className="flex">
                <img
                  className="badge-size"
                  src={require("../img/no-badge2.png")}
                  alt=""
                />
                <div className="m-t-30">
                  <h3>두번째 뱃지</h3>
                  <h4>
                    미션을 <span className="text-color">2개</span> 완료하세요.
                  </h4>
                </div>
              </div>
            </div>

            <div className="box3 m-t-30">
              <div className="flex">
                <img
                  className="badge-size"
                  src={require("../img/no-badge3.png")}
                  alt=""
                />

                <div className="m-t-30">
                  <h3>세번째 뱃지</h3>
                  <h4>
                    미션을 <span className="text-color">3개</span> 완료하세요.
                  </h4>
                </div>
              </div>
            </div>

            <div className="box3 m-t-30">
              <div className="flex">
                <img
                  className="badge-size"
                  src={require("../img/no-badge4.png")}
                  alt=""
                />
                <div className="m-t-30">
                  <h3>네번째 뱃지</h3>
                  <h4>
                    미션을 <span className="text-color">4개</span> 완료하세요.
                  </h4>
                </div>
              </div>
            </div>

            <div className="box3 m-t-30">
              <div className="flex">
                <img
                  className="badge-size"
                  src={require("../img/no-badge5.png")}
                  alt=""
                />
                <div className="m-t-30">
                  <h3>다섯번째 뱃지</h3>
                  <h4>
                    미션을 <span className="text-color">5개</span> 완료하세요.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MissionMain;
