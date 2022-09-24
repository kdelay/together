import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import "./CSSMission.css";

const MissionMain = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <div className="box1">
            <h1 style={{ marginTop: "20px", marginLeft: "10px" }}>
              전체 미션 수 :{" "}
            </h1>
            <div className="box2 m-t"></div>
        </div>
        <div>
            <div className="box2 m-t-2 m-l"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MissionMain;
