import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
            {/* <img alt='logo' className={styles.logo} src={require('../img/togetherLogo.png')}/> */}
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>메뉴 1</li>

            <li>메뉴 2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
