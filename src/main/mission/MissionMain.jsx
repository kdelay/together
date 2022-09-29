import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import "./CSSMission.css";

const MissionMain = () => {
  //   const [checkedItems, setCheckedItems] = useState(new Set());
  //   const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  //   const checkedItemHandler = (id, isChecked) => {
  //     if (isChecked) {
  //       checkedItems.add(id);
  //       setCheckedItems(checkedItems);
  //     } else if (!isChecked && checkedItems.has(id)) {
  //       checkedItems.delete(id);
  //       setCheckedItems(checkedItems);
  //     }
  //   };
  //   const [bChecked, setChecked] = useState(false);

  // const checkHandler = ({ target }) => {
  //   setChecked(!bChecked);
  //   checkedItemHandler(issue.id, target.checked);
  // };

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
            <h2>
              전체 미션 수 <span>2</span>
            </h2>
          </div>

          {/* 현재 등록한 미션 */}
          <div>
            <h1>현재 등록된 미션</h1>
            <div className="box2">
              <div className="flex">
                <input type="checkbox" />
                <h4>주말 등산 모임</h4>
                <span>미완료</span>
              </div>
              <h5>김지연, 김성은</h5>

              <div className="flex">
                <input type="checkbox" />
                <h4>사랑한다고 말하기</h4>
                <span>미완료</span>
              </div>
              <h5>김지연, 한은진, 이수빈</h5>
              {/* <input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />; */}
            </div>
          </div>
        </div>

        <div className="white-space">
          <button>미션 추가</button>

          <div>
            <h1>달성 뱃지</h1>
            <div className="box3">
              <div className="flex">
                <img className="img-size" src={require("../img/badge1.png")} />
                <h3>첫번째 뱃지</h3>
                <h4>미션을 3개 완료하세요.</h4>
              </div>
            </div>

            <div className="box3">
              <div className="flex">
                <img className="img-size" src={require("../img/badge2.png")} />
                <h3>두번째 뱃지</h3>
                <h4>미션을 3개 완료하세요.</h4>
              </div>
            </div>


            <div className="box3">
              <div className="flex">
                <img className="img-size" src={require("../img/badge3.png")} />
                <h3>세번째 뱃지</h3>
                <h4>미션을 3개 완료하세요.</h4>
              </div>
            </div>

            <div className="box3">
              <div className="flex">
                <img className="img-size" src={require("../img/badge4.png")} />
                <h3>네번째 뱃지</h3>
                <h4>미션을 3개 완료하세요.</h4>
              </div>
            </div>

            <div className="box3">
              <div className="flex">
                <img className="img-size" src={require("../img/badge5.png")} />
                <h3>다섯번째 뱃지</h3>
                <h4>미션을 3개 완료하세요.</h4>
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
