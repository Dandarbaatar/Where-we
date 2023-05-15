import React, { useState } from "react";
import "../css/addProduct.css";
import AddProductPage4 from "./addProductPage4";
function AddProductPage3(props) {
  const [checkedList, setCheckedList] = useState([]);
  const [click, setClick] = useState(false);
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
  console.log(checkedList, props.data1, props.data2);
  return (
    <div>
      {click ? (
        <AddProductPage4
          data3={checkedList}
          data1={props.data1}
          data2={props.data2}
        />
      ) : (
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
                <input
                  type="checkbox"
                  value="balcony"
                  onChange={handlechange}
                />
                <div className="host_add_answer">balcony</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  value="cleaner"
                  onChange={handlechange}
                />
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

export default AddProductPage3;
