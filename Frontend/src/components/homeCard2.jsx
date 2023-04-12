import "../App.css";
import zurh from "../assets/homeCardLike.svg";
export const HomeCard2 = () => {
  return (
    <div className="homeCard2">
      <div className="homeCard2Top">
        <button>
          <img src={zurh} />
        </button>
        <div></div>
      </div>
      <div className="homeCard2Under"></div>
    </div>
  );
};
