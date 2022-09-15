import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                로고 자리
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li>
                        메뉴 1
                    </li>

                    <li>
                        메뉴 2
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;