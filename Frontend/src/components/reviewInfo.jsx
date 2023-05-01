import "../css/detail.css";

export const ReviewInfo = (props) => {
  return (
    <div className="rewInfoMain">
      <div className={props.textClass || "displayNone"}>{props.text}</div>
      <div className={props.revLineClass || "reviewLine"}></div>
      <div className="revNumber">{props.number}</div>
    </div>
  );
};
