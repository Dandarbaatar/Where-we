import React, { useState } from "react";
import "../css/addProduct.css";
import AddProductPage6 from "./addProductPage6";
function AddProductPage4(props) {
  const [checkedArray, setCheckedArray] = useState([]);
  const [click, setClick] = useState(false);
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
  // console.log(props.data1, props.data2, props.data3, checkedArray);
  return (
    <div>
      {click ? (
        <AddProductPage6
          data1={props.data1}
          data2={props.data2}
          data3={props.data3}
          data4={checkedArray}
        />
      ) : (
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
                  value="fireThrowers"
                  onChange={handlechange}
                />
                <div className="host_add_answer">fire extinguishers</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  value="dailyCleaner"
                  onChange={handlechange}
                />
                <div className="host_add_answer">daily cleaner</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  value="fireDetector"
                  onChange={handlechange}
                />
                <div className="host_add_answer">Smoke detector</div>
              </div>
            </div>
            <div>
              <button className="host_button_s" onClick={() => setClick(true)}>
                {/* <button className="host_button_s" onClick={handleSubmit}> */}
                Next
                {/* </button> */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProductPage4;
