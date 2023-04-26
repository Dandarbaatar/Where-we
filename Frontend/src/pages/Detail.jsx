import { Header } from "../components/header";
import "../css/detail.css";
import sad from "../assets/asd.jpeg";
export const Detail = () => {
  return (
    <div className="detailContainer">
      <Header />

      <div className="detailHeroDad">
        <div className="detailHero">
          <div
            className="heroPicMain"
            style={{
              backgroundImage: `url(${sad})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hostInfoDad">
              <div className="hostImg"></div>
              <div className="hostInfo">
                <div className="listedBy">Listed By:</div>
                <div className="hostName">Dandarbaatar</div>
                <div className="hostMoney">For: $1000-$5000</div>
              </div>
            </div>
          </div>
          <div className="detailHeroSon">
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
            </div>
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              >
                <div className="morePhoto">More photos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailDesc"></div>
    </div>
  );
};


