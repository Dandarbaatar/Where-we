import "../App.css";
import "../css/addProduct.css";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { Header } from "./header";
import Footer from "./footer";

function Addimage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        console.log(imageUrls);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  });
  const setter = () => {
    window.location = "addProductPage5";
    localStorage.setItem("image", imageUrls);
  };

  return (
    <div className="app_container">
      <Header />
      <div className="App1">
        <div className="app2">
          <div className="small_container_app">
            <input
              className="add_img1"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button className="butka" onClick={uploadFile}>
              {" "}
              Upload Image
            </button>
          </div>
          <button onClick={setter} className="host_button_s">
            Next
          </button>
        </div>
        {imageUrls.map((url) => {
          return <img alt="" className="img123" src={url} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Addimage;
