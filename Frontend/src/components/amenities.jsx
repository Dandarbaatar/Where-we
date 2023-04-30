import "../App.css";

export const Amenities = (props) => {
  return (
    <div className="amenitiesMain">
      <img src={props.imgSrc} className="amenitiesImg" alt="" />
      <div className="amenitiesText">{props.text}</div>
    </div>
  );
};
