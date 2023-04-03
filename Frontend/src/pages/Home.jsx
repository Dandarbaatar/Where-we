import { Header } from "../components/header";
import "../css/home.css";
export const Home = () => {
  return (
    <div className="homeBig">
      <Header />
      <div className="homePage1">
        <div className="homePage1Content">
          <div className="homePage1Topic">FIND</div>
          <div className="homePage1Contents">
            <div className="homePage1Content">Rooms</div>
            <div className="homePage1Content">Flats</div>
            <div className="homePage1Content">Hostels</div>
            <div className="homePage1Content">villas</div>
          </div>
        </div>
      </div>
    </div>
  );
};
