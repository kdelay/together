import React from "react";
import styles from "./Header.module.css";
import {BsPersonCircle} from 'react-icons/bs'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img
          alt="logo"
          className={styles.logo}
          src={require("../img/togetherLogo.png")}
        />

        <h2 className={styles.textLogo}>Together</h2>

        <nav className={styles.navigation}>
          <ul>
            <li><BsPersonCircle/></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
