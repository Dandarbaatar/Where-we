import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import { Link } from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCheck} from '@fortawesome/free-solid-svg-icons'
export const AddProductPage1 = ({ data, setData }) => {
  // const [apartment, setApartment] = useState("");
  // const [villa, setVilla] = useState("");
  // const [ger, setGer] = useState("");
  // const [house, setHouse] = useState("");
  // const [data, setData] = useState([]);

  /// value -> villa, apartment handleSubmit
  const handlechange = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      setData([...data, value]);
    }
    if (!checked) {
      setData(data.filter((e) => e !== value));
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  // const handleDataChange = (item) => {
  //   setData(...data, item);
  // };

  return (
    <div>
      <Header />

      <div
        className="host_add_container "
        style={{ display: "flex", flexDirection: "column" }}
      >
        {" "}
        <div className="host_add_container_l">
          <div className="host_add_question">
            What kind of place will you host?
          </div>
          <div className="host_add_checkbox_father">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                className="host_checkbox"
                type="checkbox"
                value="apartment"
                onChange={handlechange}
              />
              <div className="host_add_answer">apartment</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="villa" onChange={handlechange} />
              <div className="host_add_answer">villa</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="house" onChange={handlechange} />
              <div className="host_add_answer">house</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="ger" onChange={handlechange} />
              <div className="host_add_answer">Ger</div>
            </div>
          </div>
          <button className="host_button_s">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/addproducts2"
            >
              Next
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage1;
