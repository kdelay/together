import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from '../Main.module.css'
import Sidebar from '../sidebar/Sidebar'

const CalendarMain = (props: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />
          {props.children}
        </main>

      <Footer/>
    </div>
  );
};

export default CalendarMain;