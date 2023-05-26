import React, { useEffect ,useState} from "react";
import "../App.css";
import Zurg1 from "../assets/asd.jpeg"
import Zurh from "../assets/homeCardLike.svg";
export const HomeCard = (props) => {
console.log(props.image)
  return (
    <div>
      <div  style={{backgroundImage:`url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="homeCardDiv">
        <button className="homeCardBtn">
          <img className="homeCardImg1" src={Zurh} />
        </button>
      </div>
      <div className="homeCardContent1">
        <div className="homeCardContent">
          <img className="homeCardContentImg" />
          <div className="homeCardContentText1">Well Furnished {props.name}</div>
          <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
        </div>
      </div>
    </div>
    </div>
    
  );
};
