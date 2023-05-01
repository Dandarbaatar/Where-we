import "../App.css";
import zurh from "../assets/homeCardLike.svg";
export const HomeCard2 = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="homeCard2">
      <div className="homeCard2Top">
        <div className="homeCard2TopContent">
          <div className="homeCard2TopContentImg">
            <img className="zurh" src={zurh} />
          </div>
          <div className="homeCard2TopContentPrice">
            <div className="homeCard2TopContentPrices">$ 1000 - 5000 USD</div>
            <div className="homeCard2TopContentPriceImg">
              <div className="homeCard2Tsegnud">
                {arr.map((e) => {
                  return <div className="homeCard2Tseg"></div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeCard2Under">
        <div className="homeCard2UnderText1">Well Furnished Apartment</div>
        <div className="homeCard2UnderText2">100 Smart Street, LA, USA </div>
      </div>
    </div>
  );
};
