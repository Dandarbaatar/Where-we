import "../App.css";
import "../css/addProduct.css";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import AddProductPage5 from "./addProductPage5";

function Addimage(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [click, setClick] = useState(false);

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
  // const upload = () => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // };
  // upload();
  console.log(
    props.data1,
    props.data2,
    props.data3,
    props.data4,
    props.data5,
    imageUrls
  );
  return (
    <div className="app_container">
      {click ? (
        <AddProductPage5
          data1={props.data1}
          data2={props.data2}
          data3={props.data3}
          data4={props.data4}
          data5={props.data5}
          data6={imageUrls}
        />
      ) : (
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
          </div>
          {imageUrls.map((url) => {
            return <img alt="" className="img123" src={url} />;
            // return (
            //   <div
            //     className="img321"
            //     style={{ backgroundImage: (url = { url }) }}
            //   >
            //     <button
            //       onClick={() => setClick(true)}
            //       className="host_button_s"
            //     >
            //       Next
            //     </button>
            //   </div>
            // );
          })}
          <button onClick={() => setClick(true)} className="host_button_s">
            Next
          </button>
          ;
        </div>
      )}
    </div>
  );
}

export default Addimage;
