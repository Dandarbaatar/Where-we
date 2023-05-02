import "../css/detail.css";

export const ReviewTexts = (props) => {
  return (
    <div className="revTextsMain">
      <div className="revTextsUser">
        <img src={props.imgSrc} className="revTextsUserImg" alt="" />
        <div className="revTextsUserSon">
          <div className="revTextsUserName">{props.username}</div>
          <div className="revTextUserDate">{props.date}</div>
        </div>
      </div>
      <div className="revTextsText">{props.text}</div>
    </div>
  );
};
