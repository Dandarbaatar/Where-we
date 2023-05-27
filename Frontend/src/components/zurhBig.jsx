import React, { useState } from "react";
import likedHeart from "../assets/likedHeartBig.svg";
import heart from "../assets/heartBig.svg";
import "../App.css";
const ZurhBig = (props) => {
  const [like, setLike] = useState(false);
  return (
    <div className="zurh-big">
      <button className="zurh-Btn" onClick={() => setLike(!like)}>
        <img src={like === true ? likedHeart : heart} />
      </button>
    </div>
  );
};

export default ZurhBig;
