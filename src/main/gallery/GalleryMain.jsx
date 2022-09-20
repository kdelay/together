import React, {useState, useEffect} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from '../Main.module.css'
import Sidebar from '../sidebar/Sidebar'

const ImageCard = ({ image }) => {
  const tags = image.tags.split(", ");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const GalleryMain = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]); //'term'이 바뀔 때마다 이부분이 다시 실행될것임.

  return (
    <div className={styles.layout}>
      <Header/>

        <main className={styles.main}>
          <Sidebar />


      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image}></ImageCard>;
          })}
        </div>
      )}
        </main>

      <Footer/>
    </div>
  );
};

export default GalleryMain;