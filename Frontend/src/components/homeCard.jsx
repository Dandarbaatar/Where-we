import React from "react";
import "../App.css";
import Zurh from "../assets/homeCardLike.svg";
export const HomeCard = (props) => {
  return (
    <div className="homeCard">
      <button className="homeCardBtn">
        <img src={Zurh} />
      </button>
      <div>DAD</div>
    </div>
  );
};
