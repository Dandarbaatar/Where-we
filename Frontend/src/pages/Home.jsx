import { Header } from "../components/header";
import { HomeCard } from "../components/homeCard.jsx";
import { HomeCard2 } from "../components/homeCard2";
import Footer from "../components/footer.jsx";
import { useEffect, useState } from "react";
import Zurh from "../assets/homeCardLike.svg";
import axios from "axios"
import "../App.css"

import { Link } from "react-router-dom";

import "../css/home.css";
import { SearchBar } from "../components/searchbar";
export const Home = () => {
  const [types, setTypes] = useState("");
  const [data , setData ] = useState([]);
  const [images, setImages] = useState("")
 useEffect(()=>{
  axios.get("http://localhost:8000/details/").then((response) => setData(response?.data.data)).catch((error) =>console.log(error))
  
 }, []) 
  console.log(data)
  const arr = [1, 3, 4, 5, 6, 3, 4, 5, 6];
  const darhaar = (el) => {
    console.log(el);
    // window.location.href = `${el}`
  }
  return (
    <div className="Home">
      <div className="homeBig">
        <Header headerClass="headerBigNone" Haichu="headerhaichu1" />
        <div className="homePage1">
          <div className="homePage1Content">
            <div className="homePage1Topic">FIND</div>
            <div className="homePage1Contents">
              <div
                onClick={() => setTypes("Rooms")}
                className="homePage1Content1"
              >
                Rooms
              </div>
              <div
                onClick={() => setTypes("Flats")}
                className="homePage1Content1"
              >
                Flats
              </div>
              <div
                onClick={() => setTypes("Hostels")}
                className="homePage1Content1"
              >
                Hostels
              </div>
              <div
                onClick={() => setTypes("Villas")}
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
            return <div onClick={()=>window.location.href = `detail?${e._id}`}>
            <div   className="homeCard" style={{backgroundImage:`url(${e.image[0].zurag0})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px"}}>
            <div className="homeCardDiv">
              <button className="homeCardBtn">
                <img className="homeCardImg1" src={Zurh} />
              </button>
            </div>
            <div className="homeCardContent1">
              <div className="homeCardContent">
                <img className="homeCardContentImg" />
                <div className="homeCardContentText1">Well Furnished {e.Placetype}</div>
                <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
              </div>
            </div>
          </div>
          </div>
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
      </div>
      <Footer />
    </div>
  );
};
