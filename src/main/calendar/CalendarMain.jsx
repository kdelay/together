import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import CalendarBody from "./CalendarBody";
import Calendar from "../body/calendar/BodyCalendar";
import "./Calendar.css";

const CalendarMain = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <span className="margin-top flex">
          <Calendar />
        </span>
        <div className="margin-top1 margin-left1">
          <CalendarBody />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalendarMain;
