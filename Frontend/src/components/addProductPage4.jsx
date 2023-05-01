import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
function AddProductPage4() {
  const [checkedArray, setCheckedArray] = useState([]);

  const handlechange = (event) => {
    const { valuew, checked } = event.target;
    if (checked === true) {
      setCheckedArray([
        ...checkedArray, // Keep the existing checked items
        valuew, // Update the checkbox's value
      ]);
    }
    if (!checked) {
      setCheckedArray(checkedArray.filter((e) => e !== valuew));
      // delete checkedItems[value]; // Remove the unchecked item from the object
    }
  };
  const handleSubmit = () => {
    if (checkedArray) {
      // window.location = "hostpage"
      localStorage.setItem("checkedArray", checkedArray);
      console.log(checkedArray);
      window.location = "addProducts6";
    }
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
            <button className="host_button_s" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage4;
