import React from "react";
import "../App.css";
import Zurh from "../assets/homeCardLike.svg";
export const HomeCard = (props) => {
  return (
    <div className="homeCard">
      <div className="homeCardDiv">
        <button className="homeCardBtn">
          <img className="homeCardImg1" src={Zurh} />
        </button>
      </div>
      <div className="homeCardContent1">
        <div className="homeCardContent">
          <img className="homeCardContentImg" />
          <div className="homeCardContentText1">Well Furnished Apartment</div>
          <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
        </div>
      </div>
    </div>
  );
};
