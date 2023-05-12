import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import { Link } from "react-router-dom";
function AddProductPage3({ data, setData }) {
  const [checkedList, setCheckedList] = useState([]);

  const handlechange = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      setCheckedList([
        ...checkedList, // Keep the existing checked items
        value, // Update the checkbox's value
      ]);
    }
    if (!checked) {
      setCheckedList(checkedList.filter((e) => e !== value));
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handleSubmit = () => {
    setData([...data, ...checkedList]);
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className="host_add_container">
        <div className="host_add_container_l">
          <div className="host_add_question_3">
            Add amenities available at your place.
          </div>
          <div className="host_add_checkbox_father3">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="television"
                onChange={handlechange}
              />
              <div className="host_add_answer">television</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="wifi" onChange={handlechange} />
              <div className="host_add_answer">wifi</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="washer" onChange={handlechange} />
              <div className="host_add_answer">washer</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="balcony" onChange={handlechange} />
              <div className="host_add_answer">balcony</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="cleaner" onChange={handlechange} />
              <div className="host_add_answer">cleaner</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="radio" onChange={handlechange} />
              <div className="host_add_answer">radio</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="checkbox" value="lift" onChange={handlechange} />
              <div className="host_add_answer">lift</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="air-condioner"
                onChange={handlechange}
              />
              <div className="host_add_answer">air-conditioner</div>
            </div>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/addproducts4"
            >
              <button className="host_button_s" onClick={handleSubmit}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage3;
