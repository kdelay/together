import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../Main.module.css";
import Sidebar from "../sidebar/Sidebar";
import "./CSSGallery.css";
// import TestImg from "../img/badge1.png";

const GalleryMain = () => {
  const [galleryList, setGalleryList] = useState([]); // 저장한 이미지, 제목, 내용 정보들
  const [click, setClick] = useState(false); // 화면 렌더링
  const [files, setFiles] = useState(''); // 파일 추가
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  
  // const fileUniqueName = []; // 고유값을 저장해둘 배열

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function galleryList() {
      await Axios.get("/api/galleryList").then((response) => {
        setGalleryList(response.data);
      });
    }
    galleryList();
  }, [click]);

  const onFileUpload = (e) => {
    const file = e.target.files[0]; // files가 리스트 형태로 삽입되기 때문에 추가한 하나의 사진만을 가져오기 위해 0번째 사진을 가져온다.
    console.log(file);
    setFiles(file); // files를 file로 세팅함

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      // console.log("이미지 주소", reader.result)
    }
  };

  // 서버로 데이터 전송하는 함수
  const submitImg = async () => {
    const formData = new FormData();
    formData.append("file", files); // key가 "files"인 데이터에 files을 추가한다.
    formData.append("title", title);
    formData.append("content", content);

    const response = await Axios.post("/api/galleryList", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log(response);
    // console.log(files);
    // fileUniqueName.push(response.data); // 이미지 고유 값이 배열에 추가된다.
    // console.log(fileUniqueName);

    alert("추가되었습니다.");

    console.log(galleryList);
    console.log(galleryList.fileUniqueName);

    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }

    // 값 전송하고 나면 빈 상태로 바꾸기
    setTitle("");
    setContent("");
    setImageUrl("");
  };

  const delButton = async (fileUniqueName) => {

    console.log(galleryList[0].fileUniqueName);
    console.log(fileUniqueName);

    if(window.confirm("삭제하시겠습니까?")) {
      for(let i = 0; i< galleryList.length; i++) {
        if(galleryList[i].fileUniqueName === fileUniqueName) {
          // galleryList.splice(i, 1);
          const response = await Axios.post(`/api/galleryListDel/${fileUniqueName}`)
          // const response = await Axios.post("/api/galleryListDel")
          console.log(response);
        }
      }

      alert("삭제되었습니다.");
    }
    else {
      alert("취소되었습니다.");
    }

    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  return (
    <div className={styles.layout}>
      {/* 헤더 */}
      <Header />

      <main className={styles.main}>
        {/* 사이드 바 */}
        <Sidebar />

        <div className="column center">
          <div className="gallery-img">
            {/* 파일 첨부하기 버튼(custom) */}
            <div>
              <label
                htmlFor="file"
                onChange={(e) => {
                  onFileUpload(e);
                }}
              >
                <div className="img-upload">
                  {/* 사진 미리보기 */}
                  <img src={imageUrl} id="cimg" alt=""></img>
                  <span>+</span>
                </div>
              </label>
              {/* 파일 첨부하기 버튼(invisible) */}
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  onFileUpload(e);
                }}
              />
            </div>

            {/* 제목, 내용 */}
            <div className="input-contents">
              <input type="text" placeholder="제목" value={title} maxLength="10" onChange={({target:{value}}) => setTitle(value)}/>
              <input type="text" placeholder="내용" value={content} maxLength="20" onChange={({target:{value}}) => setContent(value)}/>
            </div>

            {/* 추가 버튼 */}
            <button className="img-upload-btn" onClick={() => submitImg()}>
              추가하기
            </button>
          </div>

          {/* <br className="line"/> */}

          {/* 추가된 사진들 */}
          <div className='img-row'>
            {galleryList.map((data) => (
              <div key={data.fileUniqueName} className="img-card">
                {/* <img src={`http://localhost:80/api/galleryListGet/c2f67e12.jpg`}/> */}

                <img src={`http://localhost:80/api/galleryListGet/${data.fileUniqueName}.jpg`} alt=""/>
                <h1 className="m-l-20">{data.fileTitle}</h1>
                <h3 className="m-l-20">{data.fileContent}</h3>

                {/* 삭제 버튼 */}
                <button onClick={(() => delButton(data.fileUniqueName))} style={{float:'right', marginRight:'20px', marginBottom:'10px'}}>삭제하기</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryMain;
