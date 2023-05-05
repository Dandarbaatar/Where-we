import React from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductPage5(props) {
  const WKOPL = localStorage.getItem("checkedItems");
  const facilities = localStorage.getItem("checkeds");
  const amenities = localStorage.getItem("checkedList");
  const saftey = localStorage.getItem("checkedArray");
  const descript = localStorage.getItem("Description");
  const userid = localStorage.getItem("id");
  const postData = (e) => {
    axios
      .post(`http://localhost:8000/user/${userid}/detail`, {
        facilities: facilities,
        amenities: amenities,
        Placetype: WKOPL,
        saftey: saftey,
        description: descript,
      })
      .then((res) => toast(res?.data))
      .catch((err) => console.log(err));
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
