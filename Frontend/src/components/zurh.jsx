import React, { useState } from "react";
import likedHeart from "../assets/likedHeart.svg";
import heart from "../assets/Heart.svg";
import "../App.css";
const Zurh = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="zurh-big">
      <button className="zurh-Btn" onClick={() => setLike(!like)}>
        <img src={like == true ? likedHeart : heart} />
      </button>
    </div>
  );
};

export default Zurh;
