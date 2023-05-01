import React, { useState } from "react";
import "../css/addProduct.css";
import { Header } from "../components/header.jsx";
function AddProductPage2() {
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [parkings, setParkings] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [beds, setBeds] = useState(0);

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
  const nemeh4 = () => {
    setBeds(beds + 1);
  };
  const hasah4 = () => {
    setBeds(beds - 1);
  };
  if (beds < 0) {
    setBeds(0);
  }
  const handlesub = () => {
    const array = [];
    array.push([
      "bedrooms" + bedrooms,
      "bathrooms" + bathrooms,
      "parkings" + parkings,
      "rooms" + rooms,
      "beds" + beds,
    ]);
    console.log(array);
    localStorage.setItem("checkeds", array);
    window.location = "addProducts3";
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
            <div className="host_add2_buttons">
              <button className="host_add2_plus_minus" onClick={nemeh4}>
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
                {beds} <div className="fontsss">beds</div>{" "}
              </div>
              <button className="host_add2_plus_minus" onClick={hasah4}>
                -
              </button>
            </div>
          </div>
          <button className="host_button_s" onClick={handlesub}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage2;
