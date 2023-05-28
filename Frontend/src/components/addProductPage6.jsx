import React, { useState } from "react";
import "../css/addProduct.css";
import Addimage from "./addImage";

function AddProductPage6(props) {
  const [input, setInput] = useState("");
  const [price, setPrice] = useState("");
  const [click, setClick] = useState(false);
  const arr = [];
  arr.push(input, price);
  // console.log(props.data1, props.data2, props.data3, props.data4, arr);
  return (
    <div>
      {click ? (
        <Addimage
          data1={props.data1}
          data2={props.data2}
          data3={props.data3}
          data4={props.data4}
          data5={arr}
        />
      ) : (
        <div className="host_add_container">
          <div className="host_add_container_l_s">
            <div className="host_add_question">Add description your place</div>
            <div className="host_add_checkbox_father">
              <input
                style={{ paddingBottom: "10%" }}
                type="text"
                className="host_add_hav"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div>
              <button className="host_button_s" onClick={() => setClick(true)}>
                Next
              </button>
            </div>
          </div>
          <div className="host_add_container_l_s">
            <div className="host_add_question">Add price to your place</div>
            <div className="host_add_checkbox_father">
              <input
                style={{ paddingBottom: "10%" }}
                type="text"
                className="host_add_hav"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <button className="host_button_s1"></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProductPage6;
