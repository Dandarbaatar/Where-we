import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import { Link } from "react-router-dom";
function AddProductPage4({ data, setData }) {
  const [checkedArray, setCheckedArray] = useState([]);

  const handlechange = (event) => {
    const { value, checked } = event.target;
    if (checked === true) {
      setCheckedArray([
        ...checkedArray, // Keep the existing checked items
        value, // Update the checkbox's value
      ]);
    }
    if (!checked) {
      setCheckedArray(checkedArray.filter((e) => e !== value));
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handleSubmit = () => {
    setData([...data, ...checkedArray]);
    console.log(data);
  };

  return (
    <div>
      <Header />
      <div className="host_add_container">
        <div className="host_add_container_l">
          <div className="host_add_question">
            Add saftey available at your place.
          </div>
          <div className="host_add_checkbox_father">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="sanitizers"
                onChange={handlechange}
              />
              <div className="host_add_answer">sanitizers</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="fire throwers"
                onChange={handlechange}
              />
              <div className="host_add_answer">fire extinguishers</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="daily cleaner"
                onChange={handlechange}
              />
              <div className="host_add_answer">daily cleaner</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="checkbox"
                value="fire detector"
                onChange={handlechange}
              />
              <div className="host_add_answer">Smoke detector</div>
            </div>
          </div>
          <div>
            <Link to="/addproducts6">
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

export default AddProductPage4;
