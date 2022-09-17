import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from './Main.module.css'
import Sidebar from './sidebar/Sidebar'
import Group from './body/group/Group'

const TogetherMain = (props: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />
          <Group/>
          {props.children}
        </main>

      <Footer/>
    </div>
  );
};

export default TogetherMain;