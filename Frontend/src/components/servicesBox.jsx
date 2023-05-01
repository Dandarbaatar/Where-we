import "../App.css";
import filledStar from "../assets/filledStar.svg";

export const ServicesBox = (props) => {
  return (
    <div className={props.main || "displayNone"}>
      <div className="serviceHeader">{props.header}</div>
      <div className="serviceLocation">{props.location}</div>
      <div className="serviceChild">
        <img src={filledStar} alt="" className={props.star1 || "displayNone"} />
        <img src={filledStar} alt="" className={props.star2 || "displayNone"} />
        <img src={filledStar} alt="" className={props.star3 || "displayNone"} />
        <img src={filledStar} alt="" className={props.star4 || "displayNone"} />
        <img src={filledStar} alt="" className={props.star5 || "displayNone"} />
      </div>
    </div>
  );
};
