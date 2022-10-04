import React, { useState } from "react";
import Axios from "axios";

const ImgUploadTest = () => {
  // 작업 파일
  const [imgList, setImgList] = useState([]); // 서버로 보낼 이미지 정보
  const [url, setUrl] = useState([]); // url
  const [click, setClick] = useState(false); // 화면 렌더링

  const onChangeImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    imgList.push(file);
    console.log(imgList);

    reader.readAsDataUrl(file);
    reader.onloadend = () => {
      url.push(reader.result);
      setClick(!click); // 사진 표시를 위한 렌더링
    };
  };

  // ------ 파일 업로드 테스트 ------
  var file;

  const onFileUpload = (e) => {
    file = e.target.files[0];
  };

  const submitImg = async () => {
    let formData = new FormData();
    formData.append("file", file); // key가 'file'인 데이터를 file에 추가한다.
    const response = await Axios.post("/api/gallery333", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    alert(response.data); // response로 온 data를 경고창으로 띄운다.
  };

  return (
    <div>
      <div>
        <label
          htmlFor="file"
          onChange={(e) => {
            onChangeImage(e);
          }}
        >
          <div>업로드</div>
        </label>
      </div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            onFileUpload(e);
          }}
        />
        <button onClick={() => submitImg()}>업로드</button>
      </div>
    </div>
  );
};

export default ImgUploadTest;
