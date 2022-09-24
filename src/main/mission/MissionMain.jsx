import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from '../Main.module.css'
import Sidebar from '../sidebar/Sidebar'

const MissionMain = () => {
  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />
        </main>

      <Footer/>
    </div>
  );
};

export default MissionMain;