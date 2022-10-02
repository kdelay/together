import React, { useState, useRef } from "react";
import Axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import "./CSSGallery.css";

const GalleryMain = () => {
  const [url, setUrl] = useState(null); // URL
  // const [imgList, setImgList] = useState([]); // 서버로 보낼 데이터
  const [click, setClick] = useState(false); // 화면 렌더링
  const imgRef = useRef();

  var file;

  const onChangeImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);
    // imgList.push(file);
    // console.log(imgList);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUrl(reader.result);
      console.log("이미지 주소 : ", reader.result)
      // url.push(reader.result);
      setClick(!click); // 사진 표시를 위한 렌더링
    };
    console.log(url);
  };

  const onFileUpload = (e) => {
    file = e.target.files[0];
  };

  const submitImg = async () => {
    let formData = new FormData();
    formData.append("file", file); // key가 'file'인 데이터를 file에 추가한다.
    const response = await Axios.post("/api/Gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    alert(response.body); // response로 온 data를 경고창으로 띄운다.
  };

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Sidebar />

        {/* 사진 첨부 */}
        <div className="gallery-img">

          {/* 이미지 추가 */}
          <div>
            <label
              htmlFor="file"
              onChange={(e) => {
                onChangeImage(e);
              }}
            >
              <div className="img-upload">
              <img src={url ? url : <div></div>} id="cimg"></img>
                <span>+</span>
              </div>
            </label>
            <input
              type="file"
              id="file"
              ref={imgRef}
              onChange={(e) => {
                onChangeImage(e);
              }}
            />
          </div>


          {/* 제목, 내용 */}
          <div className="input-contents">
            <input type="text" placeholder="제목" maxLength="10" />
            <input type="text" placeholder="내용" maxLength="20" />
          </div>

          {/* 추가 버튼 */}
          <button className="img-upload-btn" onClick={() => submitImg()}>
            추가하기
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryMain;
