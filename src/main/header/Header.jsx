import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const onClick = () => {
    alert("로그아웃 되었습니다.");
  }

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <img
          alt="logo"
          className={styles.logo}
          src={require("../img/togetherLogo.png")}
        />

        <h2 className={styles.textLogo}>Together</h2>

        <Link to="/">
        <button style={{marginLeft:'1500px'}} onClick={() => onClick()}>로그아웃</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
