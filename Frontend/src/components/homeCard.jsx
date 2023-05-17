import React from "react";
import "../App.css";
import Zurh from "./zurh.jsx";


export const HomeCard = ({name,image}) => {
  return (
    <div className="homeCard">
      <div className="homeCardDiv">
        <div>
          <Zurh />
        </div>
      </div>
      <div className="homeCardContent1">
        <div className="homeCardContent">
          <img alt="" className="homeCardContentImg" src={image} />
          <div className="homeCardContentText1">Well Furnished {name}</div>
          <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
        </div>
      </div>
    </div>
  );
};
