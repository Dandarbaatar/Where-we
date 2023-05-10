import { Button } from "react-bootstrap";
import SearchButton from "../assets/SearchButton.svg";
import axios from "axios";
import { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
import { Link } from "react-router-dom";

export const SearchBar = ({ types }) => {
  let period = "";
  let location = "";
  let guests = 0;
  const Period = (e) => {
    period = e.target.value;
  };
  const Location = (e) => {
    location = e.target.value;
  };
  const Guests = (e) => {
    guests = Number(e.target.value);
  };
  const Searching = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/searchdetails",
      data: {
        period: period,
        location: location,
        guests: guests,
        placetype: types,
      },
    });
  };
  return (
    <div
      style={{
        width: "50vw",
        height: "4vw",
        backgroundColor: "white",
        borderRadius: "3vw",
        display: "flex",
        flexDirection: "row",
        marginLeft: "25vw",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "2vw",
        paddingRight: "0.8vw",
      }}
    >
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Location</div>
        <input
          placeholder="Which city do you prefer?"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "10vw",
            height: "1.3vw",
            outline: "none",
          }}
          onChange={Location}
        ></input>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      />
      {/* <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Check In</div>
        <button
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
            backgroundColor: "transparent",
          }}
          onClick={createCalendar}
        >
          Add Dates
        </button>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      /> */}
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Period</div>
        <input
          placeholder="Add Dates"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
          onChange={Period}
        ></input>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      />
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Guests</div>
        <input
          placeholder="Add Guests"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
          onChange={Guests}
        ></input>
      </div>
      <Link
        style={{
          width: "3.2vw",
          height: "3.2vw",
          borderRadius: "10vw",
          backgroundColor: "#484848",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={Searching}
        to="/search"
      >
        <img
          alt=""
          style={{ width: "1.2vw", height: "1.2vw" }}
          src={SearchButton}
        ></img>
      </Link>
    </div>
  );
};
