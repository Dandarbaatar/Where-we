import React from "react";
import "../App.css";
import Zurh from "./zurh.jsx";
export const HomeCard = () => {
  return (
    <div className="homeCard">
      <div className="homeCardDiv">
        <div>
          <Zurh />
        </div>
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
