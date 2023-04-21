import "../App.css";
import zurh from "../assets/homeCardLike.svg";
import savar from "../assets/pet.svg";
import usniiOngots from "../assets/usniiOngots.svg";
import car from "../assets/car.svg";
import or from "../assets/bed.svg";
export const HomeCard2 = () => {
  return (
    <div className="homeCard2">
      <div className="homeCard2Top">
        <div className="homeCardTopContent">
          <button className="homeCard2TopBtn">
            <img src={zurh} />
          </button>
          <div className="homeCard2TopPrice">$ 1000 - 5000 USD</div>
        </div>
      </div>
      <div className="homeCard2Under">
        <div className="homeCard2UnderText1">Well Furnished Apartment</div>
        <div className="homeCard2UnderText2">100 Smart Street, LA, USA</div>
        <div className="homeCard2UnderImgs">
          <img className="homeCard2UnderImg" src={or} />
          <img className="homeCard2UnderImg" src={usniiOngots} />
          <img className="homeCard2UnderImg" src={car} />
          <img className="homeCard2UnderImg" src={savar} />
        </div>
      </div>
    </div>
  );
};
