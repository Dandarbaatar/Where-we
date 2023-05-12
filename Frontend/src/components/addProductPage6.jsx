import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import { Link } from "react-router-dom";
function AddProductPage6({ data, setData }) {
  const [input, setInput] = useState("");
  const handlesubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setData(...data, ...input);
    console.log(data);
  };
  return (
    <div>
      <Header />
      <div className="host_add_container">
        <div className="host_add_container_l">
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
            <Link to="/addimage">
              <button className="host_button_s" onClick={handlesubmit}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage6;
