import "../App.css";
export const Boxes = (props) => {
  return (
    <div className="boxesBox">
      <img src={props.imgSource} alt="" />
      <div className="boxesText">
        {props.number},{props.text}
      </div>
    </div>
  );
};
