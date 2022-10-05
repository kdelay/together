import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img
          alt="logo"
          className={styles.logo}
          src={require("../img/togetherLogo.png")}
        />

        <h2 className={styles.textLogo}>Together</h2>
      </div>
    </header>
  );
};

export default Header;
