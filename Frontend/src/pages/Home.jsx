import { Header } from "../components/header";
import { HomeCard } from "../components/homeCard.jsx";
import "../css/home.css";
export const Home = () => {
  const arr = [1, 3, 4, 5, 6, 3, 4, 5, 6];
  return (
    <div className="Home">
      <div className="homeBig">
        <Header headerClass="headerBigNone" Haichu="headerhaichu1" />
        <div className="homePage1">
          <div className="homePage1Content">
            <div className="homePage1Topic">FIND</div>
            <div className="homePage1Contents">
              <div className="homePage1Content1">Rooms</div>
              <div className="homePage1Content1">Flats</div>
              <div className="homePage1Content1">Hostels</div>
              <div className="homePage1Content1">villas</div>
            </div>
          </div>
        </div>
      </div>
      <div className="homePage2">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Latest on the</div>
            <div className="homePage2Content1Text">Property Listining</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage2Content2Cards">
          {arr.map((e) => {
            return <HomeCard />;
          })}
        </div>
      </div>
      <div className="homePage3">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Latest on the</div>
            <div className="homePage2Content1Text">Property Listining</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage2Content2Cards">
          {arr.map((e) => {
            return <HomeCard />;
          })}
        </div>
      </div>
      <div className="homePage4">
        <div className="homePage4Content">
          <div className="homePage4ContentText1">Try Hosting With Us</div>
          <div className="homePage4ContentText2">
            Earn extra just by renting your property...
          </div>
          <button className="homePage4ContentBtn">Become A Host</button>
        </div>
      </div>
      <div className="homePage5"></div>
    </div>
  );
};
