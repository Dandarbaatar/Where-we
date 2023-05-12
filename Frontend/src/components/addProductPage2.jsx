import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
import { Link } from "react-router-dom";

function AddProductPage2({ data, setData }) {
  const item = [];
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [parkings, setParkings] = useState(0);
  const [rooms, setRooms] = useState(0);
  const nemeh = () => {
    setBedrooms(bedrooms + 1);
  };
  const hasah = () => {
    setBedrooms(bedrooms - 1);
  };
  if (bedrooms < 0) {
    setBedrooms(0);
  }
  const nemeh1 = () => {
    setBathrooms(bathrooms + 1);
  };
  const hasah1 = () => {
    setBathrooms(bathrooms - 1);
  };
  if (bathrooms < 0) {
    setBathrooms(0);
  }
  const nemeh2 = () => {
    setParkings(parkings + 1);
  };
  const hasah2 = () => {
    setParkings(parkings - 1);
  };
  if (parkings < 0) {
    setParkings(0);
  }
  const nemeh3 = () => {
    setRooms(rooms + 1);
  };
  const hasah3 = () => {
    setRooms(rooms - 1);
  };
  if (rooms < 0) {
    setRooms(0);
  }

  const handlesub = () => {
    item.push(bedrooms, rooms, parkings, bathrooms);
    console.log(data);
    setData([...data, item]);
    console.log(data);
    // array.split(",");
    // console.log(array);
    // localStorage.setItem("bedrooms", bedrooms);
    // localStorage.setItem("rooms", rooms);
    // localStorage.setItem("parkings", parkings);
    // localStorage.setItem("bathrooms", bathrooms);
    // window.location = "addProducts3";
  };

  return (
    <div>
      <Header />
      <div className="host_add_container">
        <div className="host_add_container_l">
          <div className="host_add_question">
            What kind of place will you host?
          </div>
          <div className="host_add_checkbox_father">
            <div className="host_add2_buttons">
              <button className="host_add2_plus_minus" onClick={nemeh}>
                +
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "10vw",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {bedrooms} <div className="fontsss">bedrooms</div>{" "}
              </div>
              <button className="host_add2_plus_minus" onClick={hasah}>
                -
              </button>
            </div>
            <div className="host_add2_buttons">
              <button className="host_add2_plus_minus" onClick={nemeh1}>
                +
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "10vw",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {bathrooms} <div className="fontsss">bathrooms</div>{" "}
              </div>
              <button className="host_add2_plus_minus" onClick={hasah1}>
                -
              </button>
            </div>
            <div className="host_add2_buttons">
              <button className="host_add2_plus_minus" onClick={nemeh2}>
                +
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "10vw",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {parkings} <div className="fontsss">parkings</div>{" "}
              </div>
              <button className="host_add2_plus_minus" onClick={hasah2}>
                -
              </button>
            </div>
            <div className="host_add2_buttons">
              <button className="host_add2_plus_minus" onClick={nemeh3}>
                +
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "10vw",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {rooms} <div className="fontsss">rooms</div>{" "}
              </div>
              <button className="host_add2_plus_minus" onClick={hasah3}>
                -
              </button>
            </div>
          </div>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/addproducts3"
          >
            <button className="host_button_s" onClick={handlesub}>
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage2;
