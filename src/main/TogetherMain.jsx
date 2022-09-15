import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import styles from './header/Header.module.css'
// import TogetherLogo from "../img/togetherLogo.png";

const TogetherMain = (props: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.layout}>
      <Header/>
        <main>
          {props.children}
        </main>
      <Footer/>
    </div>
  );
};

export default TogetherMain;