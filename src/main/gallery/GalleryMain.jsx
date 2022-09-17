import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from '../sidebar/Sidebar';
import '../sidebar/CSSDropdown.css';
import '../sidebar/CSSSidebar.css';
import styles from '../Main.module.css';

const GalleryMain = () => {
    return (
        <div className={styles.layout}>
        <Header/>
  
          <main className={styles.main}>
            <div>
            <Sidebar />
            </div>
          </main>
  
        <Footer/>
      </div>
    );
};

export default GalleryMain;