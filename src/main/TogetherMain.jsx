import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from './Main.module.css'
import Sidebar from './sidebar/Sidebar'
import Body from './body/Body'

const TogetherMain = () => {
  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />
          <Body/>
        </main>

        <Footer/>
    </div>
  );
};

export default TogetherMain;