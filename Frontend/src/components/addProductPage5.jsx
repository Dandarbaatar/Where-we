import React from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductPage5(props) {
  const bedrooms = localStorage.getItem("bedrooms");
  const rooms = localStorage.getItem("rooms");
  const bathrooms = localStorage.getItem("bathrooms");
  const parkings = localStorage.getItem("parkings");
  const amenities = localStorage.getItem("checkedList");
  const saftey = localStorage.getItem("checkedArray");
  const descript = localStorage.getItem("Description");
  const userid = localStorage.getItem("id");
  const image = localStorage.getItem("image");
  const apartment = localStorage.getItem("apartment");
  const villa = localStorage.getItem("villa");
  const ger = localStorage.getItem("ger");
  const house = localStorage.getItem("house");
  const postData = () => {
    axios
      .post(`http://localhost:8000/user/${userid}/detail`, {
        rooms: rooms,
        bathrooms: bathrooms,
        parkings: parkings,
        bedrooms: bedrooms,
        amenities: amenities,
        saftey: saftey,
        description: descript,
        image: image,
        apartment: apartment,
        villa: villa,
        ger: ger,
        house: house,
      })
      .then((res) => toast(res?.data))
      .catch((err) => console.log(err));
    // window.location = "/";
    localStorage.removeItems(
      "house",
      "ger",
      "villa",
      "apartment",
      "saftey",
      "description",
      "rooms",
      "bathrooms",
      " parkings",
      "bedrooms",
      "amenities",
      "image"
    );
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="host_add_container">
        <div className="host_add_container_l">
          <div className="host_add_question">
            Information can be added in similar way.
          </div>
          <div className="host_add_checkbox_father">
            The other required information can be added in a similar
            presentation for listing the property fluently...
          </div>
          <div>
            <button className="host_button_s3" onClick={postData}>
              Post My Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage5;
