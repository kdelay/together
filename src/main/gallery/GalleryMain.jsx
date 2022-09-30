import React from 'react';
import Axios from 'axios';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from '../Main.module.css';
import Sidebar from '../sidebar/Sidebar';

const GalleryMain = () => {
  var file;
  const onFileUpload = (e) => {
    file = e.target.files[0];
  }

  const submitImg = async() => {
    let formData = new FormData();
    formData.append('file', file); // key가 'file'인 데이터를 file에 추가한다.
    const response = await Axios.post('/api/Gallery', formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    });

    console.log(response);
    alert(response.body); // response로 온 data를 경고창으로 띄운다.
  }

  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />
          <div>
            <input type='file' onChange={(e)=>{onFileUpload(e)}}/>
            <button onClick={() => submitImg()}>업로드</button>
          </div>
        </main>

      <Footer/>
    </div>
  );
};

export default GalleryMain;