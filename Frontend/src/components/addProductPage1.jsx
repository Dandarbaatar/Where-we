import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import AddProductPage2 from "./addProductPage2";
import Footer from "./footer";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCheck} from '@fortawesome/free-solid-svg-icons'
export const AddProductPage1 = () => {
  const [data1, setData1] = useState([]);
  const [click, setClick] = useState(false);
  const handlechange = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      setData1([value]);
    }
    if (!checked) {
      setData1(data1.filter((e) => e !== value));
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  console.log(data1);
  return (
    <div className="hostAddProd1Dad">
      <Header />
      {click ? (
        <AddProductPage2 data1={data1} />
      ) : (
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
            {/* <button className="host_button_s" onClick={handleSubmit}> */}
            <button
              onClick={() => setClick(true)}
              className="host_button_s"
              style={{ textDecoration: "none", color: "white" }}
            >
              Next
            </button>

            {/* </button> */}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AddProductPage1;
