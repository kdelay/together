import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <h2 className={styles.title}>
                    TOGETHER!
                </h2>
            </div>
        </footer>
    );
};

export default Footer;