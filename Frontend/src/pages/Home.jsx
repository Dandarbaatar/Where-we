import { Header } from "../components/header";
import { HomeCard } from "../components/homeCard.jsx";
import "../css/home.css";
export const Home = () => {
  const arr = [1];
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
    </div>
  );
};
