import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCheck} from '@fortawesome/free-solid-svg-icons'
export function AddProductPage1() {
  const [apartment, setApartment] = useState("");
  const [villa, setVilla] = useState("");
  const [ger, setGer] = useState("");
  const [house, setHouse] = useState("");

  const handlechange = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      setApartment(value);
    }
    if (!checked) {
      setApartment("");
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handlechange1 = (event) => {
    const { value, checked } = event.target;

    if (checked === true) {
      setVilla(value);
    }
    if (!checked) {
      setVilla("");
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handlechange3 = (event) => {
    const { value, checked } = event.target;

    if (checked === true) {
      setGer(value);
    }
    if (!checked) {
      setGer("");
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handlechange2 = (event) => {
    const { value, checked } = event.target;

    if (checked === true) {
      setHouse(value);
    }
    if (!checked) {
      setHouse("");
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handleSubmit = () => {
    console.log(apartment, house, villa, ger);
    // if (checkedItems) {
    //   // window.location = "hostpage"
    //   localStorage.setItem("checkedItems", checkedItems);
    //   console.log(checkedItems);
    //   // window.location = "addProducts2";
    // }
    // checkedItems.split(",");
    // console.log(checkedItems);
  };

  return (
    <div>
      <Header />
      <div
        className="host_add_container "
        style={{ display: "flex", flexDirection: "column" }}
      >
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
              <input type="checkbox" value="villa" onChange={handlechange1} />
              <div className="host_add_answer">villa</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="house" onChange={handlechange2} />
              <div className="host_add_answer">house</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="Ger" onChange={handlechange3} />
              <div className="host_add_answer">Ger</div>
            </div>
          </div>
          <button className="host_button_s" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage1;
