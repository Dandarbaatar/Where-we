import { Header } from "../components/header";
import { HomeCard } from "../components/homeCard.jsx";
import { HomeCard2 } from "../components/homeCard2";
import Footer from "../components/footer.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/home.css";
import "../css/constants.css";
import { SearchBar } from "../components/searchbar";
export const Home = () => {
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState("");
  const [data, setData] = useState([]);
  const [images, setImages] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/details/")
      .then((response) => setData(response?.data.data))
      .catch((error) => console.log(error));
  }, []);
  data.map((e) => setImages(e?.image));
  const arr = [1, 3, 4, 5, 6, 3, 4, 5, 6];
  useEffect(() => {
    axios
      .get("http://localhost:8000/details")
      .then((response) => setDetails(response?.data?.data));
  }, []);

  return (
    <div className="Home">
      <div className="homeBig">
        <Header headerClass="headerBigNone" Haichu="headerhaichu1" />
        <div className="homePage1">
          <div className="homePage1Content">
            <div className="homePage1Topic">FIND</div>
            <div className="homePage1Contents">
              <div
                onClick={() => setTypes("apartment")}
                className="homePage1Content1"
              >
                Apartment
              </div>
              <div
                onClick={() => setTypes("flat")}
                className="homePage1Content1"
              >
                Flats
              </div>
              <div
                onClick={() => setTypes("hostel")}
                className="homePage1Content1"
              >
                Hostels
              </div>
              <div
                onClick={() => setTypes("villa")}
                className="homePage1Content1"
              >
                Villas
              </div>
            </div>
          </div>
        </div>
        <SearchBar types={types} />
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
          {data.map((e) => {
            return <HomeCard name={e?.apartment} image={e?.image} />;
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
          <Link to={"/hostpage"}>
            <button className="homePage4ContentBtn">Become A Host</button>
          </Link>
        </div>
        <div className="homePage4Img"></div>
      </div>
      <div className="homePage5">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Featured Properties</div>
            <div className="homePage2Content1Text">on our Listing</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage5cards">
          {arr.map((e) => {
            return <HomeCard2 />;
          })}
        </div>
        <div className="homePage5cards">
          {arr.map((e) => {
            return <HomeCard2 />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};
